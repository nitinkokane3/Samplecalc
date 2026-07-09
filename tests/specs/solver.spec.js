const { assertEqual } = require('../assert');

async function setField(page, field, value) {
  await page.click(`.solver-field[data-field="${field}"]`);
  await page.click('#solverKeys [data-action="clear-entry"]');
  for (const digit of String(Math.abs(value))) {
    await page.click(`#solverKeys [data-action="solverdigit"][data-value="${digit}"]`);
  }
  if (value < 0) {
    await page.click('#solverKeys [data-action="solversign"]');
  }
}

module.exports = [
  {
    name: 'linear: x - 4 = 0 solves to x = 4',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="linear"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'b', -4);
      assertEqual(await page.textContent('#result'), 'x = 4', 'linear solver result');
    },
  },
  {
    name: 'quadratic: x^2 - 5x + 6 = 0 solves to x1=3, x2=2',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="quadratic"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'b', -5);
      await setField(page, 'c', 6);
      assertEqual(await page.textContent('#result'), 'x₁ = 3, x₂ = 2', 'quadratic solver result');
    },
  },
  {
    name: 'cubic: x^3 - 6x^2 + 11x - 6 = 0 solves to roots 1, 2, 3',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="cubic"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'b', -6);
      await setField(page, 'c', 11);
      await setField(page, 'd', -6);
      assertEqual(await page.textContent('#result'), 'x₁ = 1, x₂ = 2, x₃ = 3', 'cubic solver result');
    },
  },
  {
    name: 'system2x2: 2x+y=5, x-y=1 solves to x=2, y=1',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system2x2"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 2); await setField(page, 'b', 1); await setField(page, 'c', 5);
      await setField(page, 'd', 1); await setField(page, 'e', -1); await setField(page, 'f', 1);
      assertEqual(await page.textContent('#result'), 'x = 2, y = 1', 'system2x2 solver result');
    },
  },
  {
    name: 'system2x2: keyboard-only entry (Tab across all 6 fields) solves correctly',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system2x2"]');
      await page.keyboard.press('Escape');
      // Field 'a' defaults to '1' (leading-coefficient convention); Backspace clears it
      // to '0' first, same as a real calculator keypad requires before a fresh entry.
      await page.keyboard.press('Backspace');
      await page.keyboard.type('2');
      await page.keyboard.press('Tab');
      await page.keyboard.type('1');
      await page.keyboard.press('Tab');
      await page.keyboard.type('5');
      await page.keyboard.press('Tab');
      await page.keyboard.type('1');
      await page.keyboard.press('Tab');
      await page.keyboard.type('1');
      await page.keyboard.press('-');
      await page.keyboard.press('Tab');
      await page.keyboard.type('1');
      assertEqual(await page.textContent('#result'), 'x = 2, y = 1', 'keyboard-only system2x2 result');
    },
  },
  {
    name: 'system2x2: parallel lines report no solution',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system2x2"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 1); await setField(page, 'b', 1); await setField(page, 'c', 1);
      await setField(page, 'd', 1); await setField(page, 'e', 1); await setField(page, 'f', 2);
      assertEqual(await page.textContent('#result'), 'No solution', 'system2x2 no-solution result');
    },
  },
  {
    name: 'system2x2: coincident lines report infinite solutions',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system2x2"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 1); await setField(page, 'b', 1); await setField(page, 'c', 1);
      await setField(page, 'd', 2); await setField(page, 'e', 2); await setField(page, 'f', 2);
      assertEqual(await page.textContent('#result'), 'Infinite solutions', 'system2x2 infinite-solutions result');
    },
  },
];
