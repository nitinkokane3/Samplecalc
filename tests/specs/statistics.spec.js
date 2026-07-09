const { assertEqual } = require('../assert');

module.exports = [
  {
    name: 'dataset [2,4,4,4,5,5,7,9] yields mean 5 and median 4.5',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="statistics"]');
      await page.click('#statKeys [data-action="clear"]');
      for (const v of [2, 4, 4, 4, 5, 5, 7, 9]) {
        await page.click(`#statKeys [data-action="statdigit"][data-value="${v}"]`);
        await page.click('#statKeys [data-action="statadd"]');
      }
      assertEqual(await page.textContent('#statMean'), '5', 'stat mean');
      assertEqual(await page.textContent('#statMedian'), '4.5', 'stat median');
      assertEqual(await page.textContent('#statMode'), '4', 'stat mode');
    },
  },
];
