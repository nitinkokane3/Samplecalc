const { assertEqual } = require('../assert');

module.exports = [
  {
    name: 'sin(30) = 0.5 in degree mode',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="fn"][data-value="sin("]');
      await page.click('#keys [data-action="num"][data-value="3"]');
      await page.click('#keys [data-action="num"][data-value="0"]');
      await page.click('#sciRow [data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '0.5', 'sin(30) result');
    },
  },
  {
    name: 'sqrt(81) = 9',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="sqrt"]');
      await page.click('#keys [data-action="num"][data-value="8"]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#sciRow [data-action="paren"][data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '9', 'sqrt(81) result');
    },
  },
];
