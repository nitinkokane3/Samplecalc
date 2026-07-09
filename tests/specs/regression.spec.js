const { assertEqual } = require('../assert');

async function addPoint(page, x, y) {
  await page.click('.regr-field[data-field="x"]');
  await page.click('#regrKeys [data-action="clear-entry"]');
  await page.click(`#regrKeys [data-action="regrdigit"][data-value="${x}"]`);
  await page.click('.regr-field[data-field="y"]');
  await page.click('#regrKeys [data-action="clear-entry"]');
  await page.click(`#regrKeys [data-action="regrdigit"][data-value="${y}"]`);
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
];
