const { assertEqual } = require('../assert');

module.exports = [
  {
    name: 'basic addition: 9 + 1 = 10',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="9"]');
      await page.click('#keys [data-action="operator"][data-value="+"]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '10', 'standard addition result');
    },
  },
  {
    name: 'memory M+ then MR recalls stored value',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="7"]');
      await page.click('#keys [data-action="mplus"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="mr"]');
      assertEqual(await page.textContent('#result'), '7', 'memory recall result');
    },
  },
  {
    name: 'percent: 50 % of context yields 0.5',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="5"]');
      await page.click('#keys [data-action="num"][data-value="0"]');
      await page.click('#keys [data-action="percent"]');
      assertEqual(await page.textContent('#result'), '0.5', 'percent result');
    },
  },
];
