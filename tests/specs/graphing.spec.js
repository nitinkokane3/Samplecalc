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
  {
    name: 'integral of x^2 over the default [-10, 10] range is approximately 666.6667',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="graphing"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphRow [data-action="graphvar"]');
      await page.click('#graphRow [data-action="graphop"][data-value="^"]');
      await page.click('#graphKeys [data-action="graphdigit"][data-value="2"]');
      await page.click('[data-action="graphintegral"]');
      assertEqual(await page.textContent('#result'), '∫dx=666.6667', 'integral of x^2 over [-10,10]');
    },
  },
  {
    name: 'intersect: f(x)=x^2 and g(x)=x meet at (0,0) and (1,1)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="graphing"]');
      await page.click('#graphFnTabs [data-fn="f"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphRow [data-action="graphvar"]');
      await page.click('#graphRow [data-action="graphop"][data-value="^"]');
      await page.click('#graphKeys [data-action="graphdigit"][data-value="2"]');
      await page.click('#graphFnTabs [data-fn="g"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphRow [data-action="graphvar"]');
      await page.click('[data-action="graphfindintersect"]');
      assertEqual(await page.textContent('#result'), '(0, 0), (1, 1)', 'x^2 and x intersections');
    },
  },
  {
    name: 'intersect without g(x) set prompts the user to enter it first',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="graphing"]');
      await page.click('#graphFnTabs [data-fn="g"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphFnTabs [data-fn="f"]');
      await page.click('[data-action="graphfindintersect"]');
      assertEqual(await page.textContent('#result'), 'Enter g(x) first', 'intersect without g(x)');
    },
  },
  {
    name: 'table shows f(x)=x^2 sampled across the default range, and toggles off',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="graphing"]');
      await page.click('#graphFnTabs [data-fn="f"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphRow [data-action="graphvar"]');
      await page.click('#graphRow [data-action="graphop"][data-value="^"]');
      await page.click('#graphKeys [data-action="graphdigit"][data-value="2"]');
      await page.click('[data-action="graphtoggletable"]');
      const info = await page.evaluate(() => {
        const rows = document.querySelectorAll('.graph-table-row');
        return { rowCount: rows.length, firstRow: rows[0].textContent, lastRow: rows[rows.length - 1].textContent };
      });
      assertEqual(info, { rowCount: 11, firstRow: 'x=-10100', lastRow: 'x=10100' }, 'x^2 table values at the range edges');

      await page.click('[data-action="graphtoggletable"]');
      const hidden = await page.evaluate(() => getComputedStyle(document.getElementById('graphTableWrap')).display === 'none');
      assertEqual(hidden, true, 'table hides after a second toggle');
    },
  },
];
