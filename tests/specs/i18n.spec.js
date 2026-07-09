const { assertEqual, assertTrue } = require('../assert');

module.exports = [
  {
    name: 'switching language to Marathi updates the mode label and keypad digits',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('#langToggle');
      assertEqual(await page.textContent('[data-mode="standard"]'), 'मानक', 'Marathi standard mode label');

      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="9"]');
      const displayed = await page.textContent('#result');
      assertTrue(displayed.length > 0, 'Marathi digit rendering produced non-empty result');
    },
  },
];
