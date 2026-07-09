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
  {
    name: 'angle: 180 Degree converts to Radian, and 100 Gradian converts to 90 Degree',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      await page.click('.category-btn[data-category="angle"]');
      await page.click('#convKeys [data-action="clear"]');
      await page.selectOption('#fromUnit', 'deg');
      await page.selectOption('#toUnit', 'rad');
      await page.click('#convKeys [data-action="convdigit"][data-value="1"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="8"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      assertEqual(await page.textContent('#result'), '3.1415926536 rad', '180 deg -> rad conversion');

      await page.click('#convKeys [data-action="clear"]');
      await page.selectOption('#fromUnit', 'grad');
      await page.selectOption('#toUnit', 'deg');
      await page.click('#convKeys [data-action="convdigit"][data-value="1"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      assertEqual(await page.textContent('#result'), '90 deg', '100 grad -> deg conversion');
    },
  },
  {
    name: 'currency: 100 USD converts to ~92 EUR and round-trips back via swap',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      await page.click('.category-btn[data-category="currency"]');
      await page.click('#convKeys [data-action="clear"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="1"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      const eur = parseFloat(await page.textContent('#result'));
      assertEqual(Math.abs(eur - 92) < 0.01, true, '100 USD -> EUR is approximately 92');

      await page.click('#swapUnits');
      const usd = parseFloat(await page.textContent('#result'));
      assertEqual(Math.abs(usd - 100) < 0.01, true, 'swap and convert back round-trips to ~100 USD');
    },
  },
  {
    name: 'currency: unit selectors switch to INR and other categories stay unaffected',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      await page.click('.category-btn[data-category="currency"]');
      await page.click('#convKeys [data-action="clear"]');
      await page.selectOption('#fromUnit', 'USD');
      await page.selectOption('#toUnit', 'INR');
      await page.click('#convKeys [data-action="convdigit"][data-value="1"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="0"]');
      const inr = parseFloat((await page.textContent('#result')).replace(/,/g, ''));
      assertEqual(Math.abs(inr - 8350) < 1, true, '100 USD -> INR is approximately 8350');

      await page.click('.category-btn[data-category="length"]');
      await page.click('#convKeys [data-action="clear"]');
      await page.click('#convKeys [data-action="convdigit"][data-value="1"]');
      assertEqual(await page.textContent('#result'), '3.280839895 ft', 'length category unaffected by currency addition');
    },
  },
  {
    name: 'the "rates are not live" note only shows for the Currency category',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      await page.click('.category-btn[data-category="length"]');
      assertEqual(
        await page.evaluate(() => getComputedStyle(document.getElementById('currencyNote')).display),
        'none',
        'note hidden for non-currency categories'
      );

      await page.click('.category-btn[data-category="currency"]');
      assertEqual(
        await page.evaluate(() => getComputedStyle(document.getElementById('currencyNote')).display),
        'block',
        'note visible for the currency category'
      );
      assertEqual(
        await page.textContent('#currencyNote'),
        'Rates are static (not live) so this works fully offline.',
        'note text'
      );

      await page.click('.category-btn[data-category="weight"]');
      assertEqual(
        await page.evaluate(() => getComputedStyle(document.getElementById('currencyNote')).display),
        'none',
        'note hides again after switching away from currency'
      );
    },
  },
  {
    name: 'category tabs (now 10, including Angle) wrap without horizontal overflow on a narrow (350px) viewport',
    fn: async (page, baseURL) => {
      await page.setViewportSize({ width: 350, height: 950 });
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="converter"]');
      const fits = await page.evaluate(() => {
        const tabs = document.getElementById('categoryTabs');
        return tabs.scrollWidth <= tabs.clientWidth;
      });
      assertEqual(fits, true, 'category tabs must not overflow horizontally at 350px width');
    },
  },
];
