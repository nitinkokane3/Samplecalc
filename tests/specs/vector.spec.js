const fs = require('fs');
const { assertEqual, assertTrue } = require('../assert');

async function setField(page, vec, part, value) {
  await page.click(`.vector-field[data-vec="${vec}"][data-part="${part}"]`);
  await page.click('#vectorKeys [data-action="clear-entry"]');
  if (value < 0) {
    await page.click(`#vectorKeys [data-action="vectordigit"][data-value="${Math.abs(value)}"]`);
    await page.click('#vectorKeys [data-action="vectorsign"]');
  } else if (value !== 0) {
    await page.click(`#vectorKeys [data-action="vectordigit"][data-value="${value}"]`);
  }
}

async function setVectors(page) {
  await page.click('[data-mode="vector"]');
  await page.click('#vectorKeys [data-action="clear"]');
  await setField(page, 'a', 'x', 1); await setField(page, 'a', 'y', 2); await setField(page, 'a', 'z', 3);
  await setField(page, 'b', 'x', 4); await setField(page, 'b', 'y', 5); await setField(page, 'b', 'z', 6);
}

module.exports = [
  {
    name: 'A=(1,2,3) + B=(4,5,6) = (5, 7, 9)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);
      await page.click('[data-action="vectoradd"]');
      assertEqual(await page.textContent('#result'), '(5, 7, 9)', 'vector addition result');
    },
  },
  {
    name: 'A=(1,2,3) - B=(4,5,6) = (-3, -3, -3)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);
      await page.click('[data-action="vectorsub"]');
      assertEqual(await page.textContent('#result'), '(-3, -3, -3)', 'vector subtraction result');
    },
  },
  {
    name: 'dot product of A=(1,2,3) and B=(4,5,6) is 32',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);
      await page.click('[data-action="vectordot"]');
      assertEqual(await page.textContent('#result'), '32', 'dot product result');
    },
  },
  {
    name: 'cross product of A=(1,2,3) and B=(4,5,6) is (-3, 6, -3)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);
      await page.click('[data-action="vectorcross"]');
      assertEqual(await page.textContent('#result'), '(-3, 6, -3)', 'cross product result');
    },
  },
  {
    name: 'magnitude of the active vector A=(1,2,3) is sqrt(14)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);
      await page.click('.vector-field[data-vec="a"][data-part="x"]');
      await page.click('[data-action="vectormag"]');
      assertEqual(await page.textContent('#result'), '3.7416573868', 'magnitude of A');
    },
  },
  {
    name: 'angle between A=(1,2,3) and B=(4,5,6), and the default unit vectors are perpendicular (90deg)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);
      await page.click('[data-action="vectorangle"]');
      assertEqual(await page.textContent('#result'), '12.9331544919', 'angle between A and B');

      await page.click('#vectorKeys [data-action="clear"]');
      await page.click('[data-action="vectorangle"]');
      assertEqual(await page.textContent('#result'), '90', 'default A=(1,0,0), B=(0,1,0) are perpendicular');
    },
  },
  {
    name: 'angle between two zero vectors reports an error instead of NaN',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="vector"]');
      await page.click('#vectorKeys [data-action="clear"]');
      for (const vec of ['a', 'b']) {
        for (const part of ['x', 'y', 'z']) await setField(page, vec, part, 0);
      }
      await page.click('[data-action="vectorangle"]');
      assertEqual(await page.textContent('#result'), 'Error', 'zero-vector angle is an error, not NaN');
    },
  },
  {
    name: 'keyboard-only entry (Tab across all 6 fields) computes the dot product correctly',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="vector"]');
      await page.keyboard.press('Escape');
      await page.keyboard.press('Backspace');
      await page.keyboard.type('1');
      await page.keyboard.press('Tab');
      await page.keyboard.type('2');
      await page.keyboard.press('Tab');
      await page.keyboard.type('3');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Backspace');
      await page.keyboard.type('4');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Backspace');
      await page.keyboard.type('5');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Backspace');
      await page.keyboard.type('6');
      await page.click('[data-action="vectordot"]');
      assertEqual(await page.textContent('#result'), '32', 'keyboard-only dot product result');
    },
  },
  {
    name: 'vector mode is isolated from other modes\' panels, and vice versa',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      const hiddenWhileInMatrix = await page.evaluate(() => {
        const ids = ['vectorPanel', 'complexPanel', 'solverPanel'];
        return ids.every((id) => getComputedStyle(document.getElementById(id)).display === 'none');
      });
      assertTrue(hiddenWhileInMatrix, 'vector/complex/solver panels stay hidden while in Matrix mode');

      await page.click('[data-mode="vector"]');
      const onlyVectorVisible = await page.evaluate(() => {
        const ids = ['matrixPanel', 'complexPanel', 'solverPanel', 'financeInputPanel'];
        return ids.every((id) => getComputedStyle(document.getElementById(id)).display === 'none');
      });
      assertTrue(onlyVectorVisible, 'other modes\' panels stay hidden while in Vector mode');
    },
  },
  {
    name: 'vector fields are keyboard-focusable (role=button, tabindex=0)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="vector"]');
      const attrs = await page.evaluate(() => {
        const el = document.querySelector('.vector-field');
        return { role: el.getAttribute('role'), tabindex: el.getAttribute('tabindex') };
      });
      assertEqual(attrs, { role: 'button', tabindex: '0' }, 'vector-field role/tabindex');
    },
  },
  {
    name: 'Backup & Restore exports and restores vector data',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await setVectors(page);

      await page.click('#dataToggle');
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#exportDataBtn'),
      ]);
      const downloadPath = await download.path();
      const exported = JSON.parse(fs.readFileSync(downloadPath, 'utf-8'));
      assertEqual(JSON.parse(exported.data['calc-vector-a']), { x: '1', y: '2', z: '3' }, 'exported vector A');
      assertEqual(JSON.parse(exported.data['calc-vector-b']), { x: '4', y: '5', z: '6' }, 'exported vector B');

      page.once('dialog', (dialog) => dialog.accept());
      await Promise.all([
        page.waitForNavigation({ timeout: 5000 }),
        page.click('#resetDataBtn'),
      ]);
      const clearedA = await page.evaluate(() => localStorage.getItem('calc-vector-a'));
      assertEqual(clearedA, null, 'vector A cleared after reset');

      await page.click('#dataToggle');
      await Promise.all([
        page.waitForNavigation({ timeout: 5000 }),
        page.setInputFiles('#importFileInput', downloadPath),
      ]);
      const restoredA = await page.evaluate(() => localStorage.getItem('calc-vector-a'));
      assertEqual(JSON.parse(restoredA), { x: '1', y: '2', z: '3' }, 'vector A restored after import');
    },
  },
];
