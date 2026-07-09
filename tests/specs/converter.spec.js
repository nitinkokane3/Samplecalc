const { assertEqual } = require('../assert');

module.exports = [
  {
    name: '1 meter converts to feet',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      await page.click('.category-btn[data-category="length"]');
      await page.click('#convKeys [data-action="clear"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="1"]');
      assertEqual(await page.textContent('#result'), '3.280839895 ft', '1m -> ft conversion');
    },
  },
  {
    name: '0 Celsius converts to 32 Fahrenheit',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      await page.click('.category-btn[data-category="temperature"]');
      await page.click('#convKeys [data-action="clear"]');
      assertEqual(await page.textContent('#result'), '32 f', '0C -> F conversion');
    },
  },
];
