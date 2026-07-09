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
  {
    name: 'switching to Standard or Scientific mode from another mode refreshes the display instead of leaving the previous mode\'s result on screen',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      // real regression: switchToMode() called renderX() for every mode
      // except Standard/Scientific (they share the base render(), and
      // nothing ever invoked it on switch), so their shared #expression/
      // #result kept showing whatever the previously active mode last
      // rendered there until the user typed something new.
      await page.click('[data-mode="finance"]');
      await page.click('.finance-type-btn[data-type="margin"]');
      await page.click('#financeKeys [data-action="clear"]');
      await page.click('.finance-field[data-field="a"]');
      await page.click('#financeKeys [data-action="financedigit"][data-value="8"]');
      const financeResult = await page.textContent('#result');

      await page.click('[data-mode="standard"]');
      const standardResult = await page.textContent('#result');
      assertEqual(standardResult === financeResult, false, 'Standard mode must not still show Finance\'s stale result');
      assertEqual(standardResult, '0', 'Standard mode shows its own (empty) result after switching in');

      await page.click('[data-mode="finance"]');
      await page.click('[data-mode="scientific"]');
      const scientificResult = await page.textContent('#result');
      assertEqual(scientificResult === financeResult, false, 'Scientific mode must not still show Finance\'s stale result');
      assertEqual(scientificResult, '0', 'Scientific mode shows its own (empty) result after switching in');
    },
  },
  {
    name: 'switching away from and back to Standard mode preserves an in-progress expression',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="standard"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="4"]');
      await page.click('#keys [data-action="operator"][data-value="+"]');
      await page.click('#keys [data-action="num"][data-value="6"]');
      assertEqual(await page.textContent('#result'), '10', 'live preview of 4+6');

      await page.click('[data-mode="matrix"]');
      await page.click('[data-mode="standard"]');
      assertEqual(await page.textContent('#expression'), '4+6', 'expression restored after round-trip through Matrix mode');
      assertEqual(await page.textContent('#result'), '10', 'result restored after round-trip through Matrix mode');
    },
  },
];
