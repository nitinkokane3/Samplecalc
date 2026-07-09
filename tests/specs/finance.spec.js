const { assertEqual } = require('../assert');

async function setField(page, field, value) {
  await page.click(`.finance-field[data-field="${field}"]`);
  await page.click('#financeKeys [data-action="clear-entry"]');
  for (const digit of String(Math.abs(value))) {
    await page.click(`#financeKeys [data-action="financedigit"][data-value="${digit}"]`);
  }
  if (value < 0) {
    await page.click('#financeKeys [data-action="financesign"]');
  }
}

async function gotoFinanceType(page, baseURL, type) {
  await page.goto(`${baseURL}/index.html`);
  await page.click('[data-mode="finance"]');
  await page.click(`.finance-type-btn[data-type="${type}"]`);
  await page.click('#financeKeys [data-action="clear"]');
}

module.exports = [
  {
    name: '% Of: 20% of 150 = 30',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'percentof');
      await setField(page, 'a', 20);
      await setField(page, 'b', 150);
      assertEqual(await page.textContent('#result'), '30', 'percent-of result');
    },
  },
  {
    name: '% Change: 50 -> 75 is a 50% increase',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'percentchange');
      await setField(page, 'a', 50);
      await setField(page, 'b', 75);
      assertEqual(await page.textContent('#result'), '50% (increase)', 'percent-change result');
    },
  },
  {
    name: 'Discount: 200 at 15% saves 30, final price 170',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'discount');
      await setField(page, 'a', 200);
      await setField(page, 'b', 15);
      const output = await page.evaluate(() => document.getElementById('financeOutputPanel').textContent);
      assertEqual(output.includes('30') && output.includes('170'), true, 'discount saved/final price present');
    },
  },
  {
    name: 'Simple interest: 1000 at 5% for 2 years = 100 interest, 1,100 total',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'simpleinterest');
      await setField(page, 'a', 1000);
      await setField(page, 'b', 5);
      await setField(page, 'c', 2);
      const output = await page.evaluate(() => document.getElementById('financeOutputPanel').textContent);
      assertEqual(output.includes('1,100'), true, 'simple interest total present');
    },
  },
  {
    name: 'Tip split: 100 bill, 18% tip, 4 people',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'tip');
      await setField(page, 'a', 100);
      await setField(page, 'b', 18);
      await setField(page, 'c', 4);
      const output = await page.evaluate(() => document.getElementById('financeOutputPanel').textContent);
      assertEqual(output.includes('18') && output.includes('29.5'), true, 'tip/per-person amounts present');
    },
  },
  {
    name: 'Tip split: keyboard-only entry (Tab across all 3 fields) computes correctly',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'tip');
      await page.click('.finance-field[data-field="a"]');
      await page.keyboard.press('Escape');
      await page.keyboard.type('100');
      await page.keyboard.press('Tab');
      await page.keyboard.type('18');
      await page.keyboard.press('Tab');
      await page.keyboard.type('4');
      const output = await page.evaluate(() => document.getElementById('financeOutputPanel').textContent);
      assertEqual(output.includes('18') && output.includes('29.5'), true, 'keyboard-only tip/per-person amounts present');
    },
  },
  {
    name: 'Tip split with 0 people shows an error instead of Infinity',
    fn: async (page, baseURL) => {
      await gotoFinanceType(page, baseURL, 'tip');
      await setField(page, 'a', 100);
      await setField(page, 'b', 18);
      await setField(page, 'c', 0);
      const result = await page.textContent('#result');
      assertEqual(result.includes('Infinity') || result.includes('NaN'), false, 'no Infinity/NaN leaking through');
    },
  },
];
