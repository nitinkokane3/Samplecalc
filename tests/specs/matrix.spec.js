const { assertEqual, assertTrue } = require('../assert');

async function setCell(page, mat, r, c, value) {
  await page.click(`.matrix-cell[data-mat="${mat}"][data-r="${r}"][data-c="${c}"]`);
  await page.click('#matrixKeys [data-action="clear-entry"]');
  if (value < 0) {
    await page.click(`#matrixKeys [data-action="matrixdigit"][data-value="${Math.abs(value)}"]`);
    await page.click('#matrixKeys [data-action="matrixsign"]');
  } else {
    await page.click(`#matrixKeys [data-action="matrixdigit"][data-value="${value}"]`);
  }
}

module.exports = [
  {
    name: '2x2: identity + identity = [2,0;0,2]',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      await page.click('[data-action="matrixadd"]');
      assertEqual(await page.textContent('#result'), '[2, 0; 0, 2]', '2x2 identity add result');
    },
  },
  {
    name: '2x2: det([1,2;3,4]) = -2',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      await setCell(page, 'a', 0, 0, 1); await setCell(page, 'a', 0, 1, 2);
      await setCell(page, 'a', 1, 0, 3); await setCell(page, 'a', 1, 1, 4);
      await page.click('[data-action="matrixdet"]');
      assertEqual(await page.textContent('#result'), '-2', '2x2 determinant result');
    },
  },
  {
    name: '3x3: det([1,2,3;0,1,4;5,6,0]) = 1, and its inverse matches the hand-computed adjugate',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      await page.click('.matrix-size-btn[data-size="3"]');
      await setCell(page, 'a', 0, 0, 1); await setCell(page, 'a', 0, 1, 2); await setCell(page, 'a', 0, 2, 3);
      await setCell(page, 'a', 1, 0, 0); await setCell(page, 'a', 1, 1, 1); await setCell(page, 'a', 1, 2, 4);
      await setCell(page, 'a', 2, 0, 5); await setCell(page, 'a', 2, 1, 6); await setCell(page, 'a', 2, 2, 0);
      await page.click('[data-action="matrixdet"]');
      assertEqual(await page.textContent('#result'), '1', '3x3 determinant result');

      await page.click('[data-action="matrixinv"]');
      assertEqual(
        await page.textContent('#result'),
        '[-24, 18, 5; 20, -15, -4; -5, 4, 1]',
        '3x3 inverse result'
      );
    },
  },
  {
    name: '3x3: A x identity = A, and a singular matrix reports no inverse',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      await page.click('.matrix-size-btn[data-size="3"]');
      await setCell(page, 'a', 0, 0, 1); await setCell(page, 'a', 0, 1, 2); await setCell(page, 'a', 0, 2, 3);
      await setCell(page, 'a', 1, 0, 4); await setCell(page, 'a', 1, 1, 5); await setCell(page, 'a', 1, 2, 6);
      await setCell(page, 'a', 2, 0, 7); await setCell(page, 'a', 2, 1, 8); await setCell(page, 'a', 2, 2, 9);
      await page.click('[data-action="matrixmul"]');
      assertEqual(await page.textContent('#result'), '[1, 2, 3; 4, 5, 6; 7, 8, 9]', '3x3 A x I result');

      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) await setCell(page, 'a', r, c, 0);
      }
      await page.click('[data-action="matrixinv"]');
      assertEqual(await page.textContent('#result'), 'Singular matrix', '3x3 singular matrix message');
    },
  },
  {
    name: 'switching to 3x3 and back to 2x2 leaves 2x2 math unaffected',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="matrix"]');
      await page.click('.matrix-size-btn[data-size="3"]');
      await page.click('.matrix-size-btn[data-size="2"]');
      await page.click('#matrixKeys [data-action="clear"]');
      await page.click('[data-action="matrixadd"]');
      assertEqual(await page.textContent('#result'), '[2, 0; 0, 2]', '2x2 result after round-trip through 3x3');

      const r2Hidden = await page.evaluate(() => {
        const cell = document.querySelector('.matrix-cell[data-mat="a"][data-r="2"][data-c="0"]');
        return getComputedStyle(cell).display === 'none';
      });
      assertTrue(r2Hidden, 'row 3 cells must be hidden while in 2x2 mode');
    },
  },
];
