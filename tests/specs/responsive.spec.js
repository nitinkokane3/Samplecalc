const { assertTrue, assertEqual } = require('../assert');

async function activeButtonFullyVisible(page) {
  return page.evaluate(() => {
    const container = document.querySelector('.mode-switch');
    const active = document.querySelector('.mode-btn.active');
    const cr = container.getBoundingClientRect();
    const ar = active.getBoundingClientRect();
    return ar.left >= cr.left - 1 && ar.right <= cr.right + 1;
  });
}

module.exports = [
  {
    name: 'switching modes scrolls the newly-active mode button into view within the mode-switch strip',
    fn: async (page, baseURL) => {
      // real regression: the 12-mode top nav (.mode-switch) is a horizontal-
      // scroll strip that shrinks to fit whatever's left after the 5 fixed-
      // size icon buttons (.top-actions, flex-shrink: 0) take their share.
      // Nothing ever scrolled the active button into view on switch, so on
      // a real phone-width viewport the active mode could be scrolled out
      // of sight entirely -- e.g. switching to Finance (the last button)
      // left the strip still showing Standard's end of the list.
      await page.setViewportSize({ width: 375, height: 800 });
      await page.goto(`${baseURL}/index.html`);

      for (const mode of ['finance', 'complex', 'vector', 'standard']) {
        await page.click(`[data-mode="${mode}"]`);
        await page.waitForTimeout(150);
        const visible = await activeButtonFullyVisible(page);
        assertTrue(visible, `${mode} mode button must be scrolled fully into view within .mode-switch after switching to it`);
      }
    },
  },
  {
    name: 'the mode-switch strip has usable width on a real narrow phone viewport (375px), not squeezed to near-zero by the icon row',
    fn: async (page, baseURL) => {
      // the icon row (.top-actions) never shrinks (flex-shrink: 0), so on
      // narrow viewports .mode-switch -- the only flexible sibling -- used
      // to absorb the entire squeeze, collapsing to under 20px wide and
      // showing a barely-visible fragment of even the active button.
      await page.setViewportSize({ width: 375, height: 800 });
      await page.goto(`${baseURL}/index.html`);
      const width = await page.evaluate(() => document.querySelector('.mode-switch').getBoundingClientRect().width);
      assertTrue(width >= 90, `mode-switch should have a reasonably usable width at 375px, got ${width}px`);
    },
  },
  {
    name: 'switching modes never causes real horizontal page scroll, even on a narrow viewport',
    fn: async (page, baseURL) => {
      await page.setViewportSize({ width: 360, height: 800 });
      await page.goto(`${baseURL}/index.html`);
      for (const mode of ['scientific', 'programmer', 'graphing', 'finance']) {
        await page.click(`[data-mode="${mode}"]`);
        await page.waitForTimeout(100);
      }
      await page.evaluate(() => window.scrollTo(9999, 0));
      const scrollX = await page.evaluate(() => window.scrollX);
      assertEqual(scrollX, 0, 'the page itself must never scroll horizontally, regardless of the mode-switch strip\'s internal scroll');
    },
  },
  {
    name: 'the mode-switch strip itself remains independently scrollable even though the page cannot scroll',
    fn: async (page, baseURL) => {
      await page.setViewportSize({ width: 350, height: 700 });
      await page.goto(`${baseURL}/index.html`);
      await page.waitForTimeout(150);
      await page.evaluate(() => { document.querySelector('.mode-switch').scrollLeft = 300; });
      await page.waitForTimeout(100);
      const internalScroll = await page.evaluate(() => document.querySelector('.mode-switch').scrollLeft);
      assertTrue(internalScroll > 0, 'mode-switch must still be internally scrollable after containing page-level overflow');
      const pageScrollX = await page.evaluate(() => window.scrollX);
      assertEqual(pageScrollX, 0, 'scrolling the internal strip must not move the outer page');
    },
  },
];
