const { assertEqual, assertTrue } = require('../assert');

module.exports = [
  {
    name: 'custom field-row controls are keyboard-focusable, role=button, and toggle aria-pressed',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      const attrs = await page.evaluate(() => {
        const el = document.querySelector('.solver-field');
        return { role: el.getAttribute('role'), tabindex: el.getAttribute('tabindex') };
      });
      assertEqual(attrs, { role: 'button', tabindex: '0' }, 'solver-field role/tabindex');

      await page.evaluate(() => document.querySelector('.solver-field[data-field="b"]').focus());
      await page.keyboard.press('Enter');
      const activeField = await page.evaluate(() => document.querySelector('.solver-field.active')?.dataset.field);
      assertEqual(activeField, 'b', 'Enter key activates the focused field');
      assertEqual(await page.evaluate(() => document.querySelector('.solver-field[data-field="b"]').getAttribute('aria-pressed')), 'true', 'active field has aria-pressed=true');
      assertEqual(await page.evaluate(() => document.querySelector('.solver-field[data-field="a"]').getAttribute('aria-pressed')), 'false', 'inactive field has aria-pressed=false');

      await page.keyboard.type('7');
      assertEqual(await page.textContent('#solverB'), '7', 'digit entry works after keyboard-only activation');
    },
  },
  {
    name: 'Space key also activates a focused field-row control',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="quadratic"]');
      await page.evaluate(() => document.querySelector('.solver-field[data-field="c"]').focus());
      await page.keyboard.press('Space');
      const activeField = await page.evaluate(() => document.querySelector('.solver-field.active')?.dataset.field);
      assertEqual(activeField, 'c', 'Space key activates the focused field');
    },
  },
  {
    name: 'matrix cells are keyboard-focusable and role=button',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      const attrs = await page.evaluate(() => {
        const el = document.querySelector('.matrix-cell');
        return { role: el.getAttribute('role'), tabindex: el.getAttribute('tabindex') };
      });
      assertEqual(attrs, { role: 'button', tabindex: '0' }, 'matrix-cell role/tabindex');
    },
  },
  {
    name: 'help and data overlays expose dialog semantics and manage focus',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      const helpAttrs = await page.evaluate(() => {
        const el = document.getElementById('helpOverlay');
        return { role: el.getAttribute('role'), ariaModal: el.getAttribute('aria-modal'), ariaLabelledby: el.getAttribute('aria-labelledby') };
      });
      assertEqual(helpAttrs, { role: 'dialog', ariaModal: 'true', ariaLabelledby: 'helpTitleText' }, 'help overlay dialog attributes');
      assertTrue(await page.evaluate(() => !!document.getElementById('helpTitleText')), 'help overlay labelledby target exists');

      await page.click('#helpToggle');
      assertEqual(await page.evaluate(() => document.activeElement.id), 'helpClose', 'focus moves into the dialog on open');
      await page.keyboard.press('Escape');
      assertEqual(await page.evaluate(() => document.activeElement.id), 'helpToggle', 'focus returns to the trigger button on close');
    },
  },
  {
    name: 'the Help Guide dialog links to the full user manual, opening it in a new tab without navigating the app away',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('#helpToggle');
      const link = page.locator('.help-manual-link');
      assertEqual(await link.getAttribute('href'), 'docs/user-manual.html', 'manual link href');
      assertEqual(await link.getAttribute('target'), '_blank', 'manual link opens in a new tab');
      assertEqual(await link.getAttribute('rel'), 'noopener', 'manual link has rel=noopener');

      const [manualPage] = await Promise.all([
        page.context().waitForEvent('page'),
        link.click(),
      ]);
      await manualPage.waitForLoadState('domcontentloaded');
      assertTrue(manualPage.url().endsWith('docs/user-manual.html'), 'clicking the link opens docs/user-manual.html');
      assertTrue((await manualPage.title()).includes('User Manual'), 'the new tab is the user manual page');
      assertEqual(page.url().endsWith('/index.html'), true, 'the original app tab is unaffected');
      await manualPage.close();

      // the manual link joins the dialog's Tab-trapped focus order as the last element
      await page.evaluate(() => document.getElementById('helpClose').focus());
      await page.keyboard.press('Shift+Tab');
      assertEqual(await page.evaluate(() => document.activeElement.className), 'help-manual-link', 'Shift+Tab from the close button wraps to the manual link');
    },
  },
  {
    name: 'data dialog traps focus with Tab, wrapping from last element back to first',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('#dataToggle');
      await page.evaluate(() => {
        const container = document.getElementById('dataOverlay');
        const focusable = Array.from(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
          .filter((el) => !el.disabled && el.offsetParent !== null);
        focusable[focusable.length - 1].focus();
      });
      await page.keyboard.press('Tab');
      assertEqual(await page.evaluate(() => document.activeElement.id), 'dataClose', 'Tab from the last focusable element wraps to the first');

      await page.keyboard.press('Shift+Tab');
      assertEqual(await page.evaluate(() => document.activeElement.id), 'resetDataBtn', 'Shift+Tab from the first focusable element wraps to the last');
    },
  },
  {
    name: 'unit selects have accessible labels',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      const labels = await page.evaluate(() => [
        document.getElementById('fromUnit').getAttribute('aria-label'),
        document.getElementById('toUnit').getAttribute('aria-label'),
      ]);
      assertEqual(labels, ['Convert from', 'Convert to'], 'from/to unit select aria-labels');
    },
  },
];
