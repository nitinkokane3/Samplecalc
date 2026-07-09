const { assertEqual } = require('../assert');

module.exports = [
  {
    name: 'f(x) = sin(x) roots found at multiples of pi',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="graphing"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphRow [data-action="graphfn"][data-value="sin("]');
      await page.click('#graphRow [data-action="graphvar"]');
      await page.click('#graphRow [data-action="graphparen"][data-value=")"]');
      await page.click('[data-action="graphfindroots"]');
      assertEqual(
        await page.textContent('#result'),
        '-9.424778, -6.283185, -3.141593, 0, 3.141593, 6.283185, 9.424778',
        'sin(x) roots'
      );
    },
  },
];
