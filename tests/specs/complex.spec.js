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
  {
    name: '(3+4i) - (1+2i) = 2+2i',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);
      await setField(page, 'b', 're', 1); await setField(page, 'b', 'im', 2);
      await page.click('[data-action="complexsub"]');
      assertEqual(await page.textContent('#result'), '2 + 2i', 'complex subtraction result');
    },
  },
  {
    name: '(3+4i) x (1+2i) = -5+10i',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);
      await setField(page, 'b', 're', 1); await setField(page, 'b', 'im', 2);
      await page.click('[data-action="complexmul"]');
      assertEqual(await page.textContent('#result'), '-5 + 10i', 'complex multiplication result');
    },
  },
  {
    name: '(3+4i) / (1+2i) = 2.2-0.4i, and division by zero shows an error',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);
      await setField(page, 'b', 're', 1); await setField(page, 'b', 'im', 2);
      await page.click('[data-action="complexdiv"]');
      assertEqual(await page.textContent('#result'), '2.2 - 0.4i', 'complex division result');

      await setField(page, 'b', 're', 0); await setField(page, 'b', 'im', 0);
      await page.click('[data-action="complexdiv"]');
      assertEqual(await page.textContent('#result'), 'Error', 'division by zero shows an error');
    },
  },
  {
    name: 'arg and conj operate on whichever number was last selected (A here)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);
      await setField(page, 'b', 're', 1); await setField(page, 'b', 'im', 2);

      await page.click('.complex-field[data-num="a"][data-part="re"]');
      await page.click('[data-action="complexarg"]');
      assertEqual(await page.textContent('#result'), '53.1301023542', 'arg(3+4i) result');

      await page.click('.complex-field[data-num="a"][data-part="re"]');
      await page.click('[data-action="complexconj"]');
      assertEqual(await page.textContent('#result'), '3 - 4i', 'conj(3+4i) result');
    },
  },
  {
    name: 'polar form: 3+4i is 5 ∠ 53.1301023542° in DEG mode, and 5 ∠ 0.927295218 rad in RAD mode',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'a', 're', 3); await setField(page, 'a', 'im', 4);

      await page.click('.complex-field[data-num="a"][data-part="re"]');
      await page.click('[data-action="complexpolar"]');
      assertEqual(await page.textContent('#result'), '5 ∠ 53.1301023542°', 'polar(3+4i) result in DEG');

      await page.click('[data-mode="scientific"]');
      await page.click('#degRadBtn');
      await page.click('[data-mode="complex"]');
      await page.click('[data-action="complexpolar"]');
      assertEqual(await page.textContent('#result'), '5 ∠ 0.927295218 rad', 'polar(3+4i) result in RAD');
    },
  },
  {
    name: 'polar form of B=0-5i is 5 ∠ -90° (pure negative imaginary number)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="complex"]');
      await setField(page, 'b', 're', 0); await setField(page, 'b', 'im', -5);
      await page.click('[data-action="complexpolar"]');
      assertEqual(await page.textContent('#result'), '5 ∠ -90°', 'polar(0-5i) result');
    },
  },
];
