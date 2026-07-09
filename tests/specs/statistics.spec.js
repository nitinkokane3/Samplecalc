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
  {
    name: 'dataset [2,4,4,4,5,5,7,9] computes quartiles, IQR, range, and both std deviations',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="statistics"]');
      await page.click('#statKeys [data-action="clear"]');
      for (const v of [2, 4, 4, 4, 5, 5, 7, 9]) {
        await page.click(`#statKeys [data-action="statdigit"][data-value="${v}"]`);
        await page.click('#statKeys [data-action="statadd"]');
      }
      assertEqual(await page.textContent('#statQ1'), '4', 'Q1');
      assertEqual(await page.textContent('#statQ3'), '6', 'Q3');
      assertEqual(await page.textContent('#statIQR'), '2', 'IQR');
      assertEqual(await page.textContent('#statMin'), '2', 'min');
      assertEqual(await page.textContent('#statMax'), '9', 'max');
      assertEqual(await page.textContent('#statRange'), '7', 'range');
      assertEqual(await page.textContent('#statPStd'), '2', 'population std deviation');
      assertEqual(await page.textContent('#statSStd'), '2.1380899353', 'sample std deviation');
      assertEqual(await page.textContent('#statCV'), '42.761798706%', 'coefficient of variation (sample std dev / mean)');
    },
  },
  {
    name: 'a single-value dataset has no sample std deviation, quartiles, or mode',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="statistics"]');
      await page.click('#statKeys [data-action="clear"]');
      await page.click('#statKeys [data-action="statdigit"][data-value="1"]');
      await page.click('#statKeys [data-action="statdigit"][data-value="0"]');
      await page.click('#statKeys [data-action="statadd"]');
      assertEqual(await page.textContent('#statN'), '1', 'N is 1');
      assertEqual(await page.textContent('#statMean'), '10', 'mean equals the single value');
      assertEqual(await page.textContent('#statPStd'), '0', 'population std deviation is 0');
      assertEqual(await page.textContent('#statSStd'), '—', 'sample std deviation is undefined for n=1');
      assertEqual(await page.textContent('#statCV'), '—', 'coefficient of variation is undefined for n=1 (no sample std dev)');
      assertEqual(await page.textContent('#statQ1'), '—', 'Q1 is undefined for n=1');
      assertEqual(await page.textContent('#statMode'), 'N/A', 'no mode when every value is unique');
    },
  },
  {
    name: 'removing a value via its chip button recomputes the statistics',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="statistics"]');
      await page.click('#statKeys [data-action="clear"]');
      for (const v of [1, 2, 3]) {
        await page.click(`#statKeys [data-action="statdigit"][data-value="${v}"]`);
        await page.click('#statKeys [data-action="statadd"]');
      }
      assertEqual(await page.evaluate(() => document.querySelectorAll('#statChips .stat-chip').length), 3, 'three chips before removal');

      await page.click('#statChips .stat-chip button');
      assertEqual(await page.evaluate(() => document.querySelectorAll('#statChips .stat-chip').length), 2, 'two chips after removing one');
      assertEqual(await page.textContent('#statN'), '2', 'N updates after removal');
    },
  },
  {
    name: 'coefficient of variation is undefined when the mean is 0, even with a defined sample std deviation',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="statistics"]');
      await page.click('#statKeys [data-action="clear"]');

      await page.click('#statKeys [data-action="statdigit"][data-value="1"]');
      await page.click('#statKeys [data-action="statadd"]');
      await page.click('#statKeys [data-action="statdigit"][data-value="1"]');
      await page.click('#statKeys [data-action="statsign"]');
      await page.click('#statKeys [data-action="statadd"]');

      assertEqual(await page.textContent('#statMean'), '0', 'mean of [1,-1] is 0');
      assertEqual(await page.textContent('#statSStd'), '1.4142135624', 'sample std deviation is defined');
      assertEqual(await page.textContent('#statCV'), '—', 'CV is undefined (division by zero mean) despite a defined sample std dev');
    },
  },
];
