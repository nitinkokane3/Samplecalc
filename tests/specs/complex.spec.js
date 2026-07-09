const { assertEqual } = require('../assert');

async function setField(page, num, part, value) {
  await page.click(`.complex-field[data-num="${num}"][data-part="${part}"]`);
  await page.click('#complexKeys [data-action="clear-entry"]');
  if (value < 0) {
    await page.click(`#complexKeys [data-action="complexdigit"][data-value="${Math.abs(value)}"]`);
    await page.click('#complexKeys [data-action="complexsign"]');
  } else {
    await page.click(`#complexKeys [data-action="complexdigit"][data-value="${value}"]`);
  }
}

module.exports = [
  {
    name: '(3+4i) + (1+2i) = 4+6i',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);
      await setField(page, 'b', 're', 1); await setField(page, 'b', 'im', 2);
      await page.click('[data-action="complexadd"]');
      assertEqual(await page.textContent('#result'), '4 + 6i', 'complex addition result');
    },
  },
  {
    name: 'modulus of 3+4i is 5',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);
      await page.click('[data-action="complexmod"]');
      assertEqual(await page.textContent('#result'), '5', 'complex modulus result');
    },
  },
];
