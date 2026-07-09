const { assertEqual } = require('../assert');

async function addPoint(page, x, y) {
  await page.click('.regr-field[data-field="x"]');
  await page.click('#regrKeys [data-action="clear-entry"]');
  if (x < 0) {
    await page.click(`#regrKeys [data-action="regrdigit"][data-value="${Math.abs(x)}"]`);
    await page.click('#regrKeys [data-action="regrsign"]');
  } else {
    await page.click(`#regrKeys [data-action="regrdigit"][data-value="${x}"]`);
  }
  await page.click('.regr-field[data-field="y"]');
  await page.click('#regrKeys [data-action="clear-entry"]');
  if (y < 0) {
    await page.click(`#regrKeys [data-action="regrdigit"][data-value="${Math.abs(y)}"]`);
    await page.click('#regrKeys [data-action="regrsign"]');
  } else {
    await page.click(`#regrKeys [data-action="regrdigit"][data-value="${y}"]`);
  }
  await page.click('#regrKeys [data-action="regradd"]');
}

module.exports = [
  {
    name: 'perfect line (1,2) (2,4) (3,6) fits y = 2x with r^2 = 1',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="regression"]');
      await page.click('#regrKeys [data-action="clear"]');
      await addPoint(page, 1, 2);
      await addPoint(page, 2, 4);
      await addPoint(page, 3, 6);
      assertEqual(await page.textContent('#result'), 'y = 2x + 0', 'regression line fit result');
      assertEqual(await page.textContent('#regrR2'), '1', 'regression r-squared');
    },
  },
  {
    name: 'imperfect fit (1,1) (2,2) (3,4) computes slope, intercept, and r-squared correctly',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="regression"]');
      await page.click('#regrKeys [data-action="clear"]');
      await addPoint(page, 1, 1);
      await addPoint(page, 2, 2);
      await addPoint(page, 3, 4);
      assertEqual(await page.textContent('#result'), 'y = 1.5x - 0.6666666667', 'imperfect-fit regression line');
      assertEqual(await page.textContent('#regrSlope'), '1.5', 'imperfect-fit slope');
      assertEqual(await page.textContent('#regrIntercept'), '-0.6666666667', 'imperfect-fit intercept');
      assertEqual(await page.textContent('#regrR2'), '0.9642857143', 'imperfect-fit r-squared');
    },
  },
  {
    name: 'a vertical line (constant x) reports that x values must vary',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="regression"]');
      await page.click('#regrKeys [data-action="clear"]');
      await addPoint(page, 5, 1);
      await addPoint(page, 5, 2);
      await addPoint(page, 5, 3);
      assertEqual(await page.textContent('#result'), 'x values must vary', 'vertical-line result');
    },
  },
  {
    name: 'fewer than 2 points reports that more points are needed',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="regression"]');
      await page.click('#regrKeys [data-action="clear"]');
      await addPoint(page, 1, 1);
      assertEqual(await page.textContent('#result'), 'Need at least 2 points', 'single-point result');
    },
  },
  {
    name: 'removing a point via its chip button recomputes the fit',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="regression"]');
      await page.click('#regrKeys [data-action="clear"]');
      await addPoint(page, 1, 2);
      await addPoint(page, 2, 4);
      await addPoint(page, 3, 6);
      assertEqual(await page.evaluate(() => document.querySelectorAll('#regrChips .stat-chip').length), 3, 'three chips before removal');

      await page.click('#regrChips .stat-chip button');
      assertEqual(await page.evaluate(() => document.querySelectorAll('#regrChips .stat-chip').length), 2, 'two chips after removing one');
      assertEqual(await page.textContent('#regrN'), '2', 'point count updates after removal');
    },
  },
];
