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
  {
    name: 'system2x2: degenerate 0x+0y=5, 0x+0y=3 correctly reports no solution (not infinite)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system2x2"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 0); await setField(page, 'b', 0); await setField(page, 'c', 5);
      await setField(page, 'd', 0); await setField(page, 'e', 0); await setField(page, 'f', 3);
      assertEqual(await page.textContent('#result'), 'No solution', 'degenerate system2x2 no-solution result');
    },
  },
  {
    name: 'system3x3: x+y+z=6, 2x+y-z=1, x-y+2z=5 solves to x=1, y=2, z=3',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system3x3"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 1); await setField(page, 'b', 1); await setField(page, 'c', 1); await setField(page, 'd', 6);
      await setField(page, 'e', 2); await setField(page, 'f', 1); await setField(page, 'g', -1); await setField(page, 'h', 1);
      await setField(page, 'i', 1); await setField(page, 'j', -1); await setField(page, 'k', 2); await setField(page, 'l', 5);
      assertEqual(await page.textContent('#result'), 'x = 1, y = 2, z = 3', 'system3x3 solver result');
    },
  },
  {
    name: 'system3x3: three parallel planes report no solution',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system3x3"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 1); await setField(page, 'b', 1); await setField(page, 'c', 1); await setField(page, 'd', 1);
      await setField(page, 'e', 1); await setField(page, 'f', 1); await setField(page, 'g', 1); await setField(page, 'h', 2);
      await setField(page, 'i', 1); await setField(page, 'j', 1); await setField(page, 'k', 1); await setField(page, 'l', 3);
      assertEqual(await page.textContent('#result'), 'No solution', 'system3x3 no-solution result');
    },
  },
  {
    name: 'system3x3: three coincident planes report infinite solutions',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system3x3"]');
      await page.click('#solverKeys [data-action="clear"]');
      await setField(page, 'a', 1); await setField(page, 'b', 1); await setField(page, 'c', 1); await setField(page, 'd', 1);
      await setField(page, 'e', 2); await setField(page, 'f', 2); await setField(page, 'g', 2); await setField(page, 'h', 2);
      await setField(page, 'i', 3); await setField(page, 'j', 3); await setField(page, 'k', 3); await setField(page, 'l', 3);
      assertEqual(await page.textContent('#result'), 'Infinite solutions', 'system3x3 infinite-solutions result');
    },
  },
  {
    name: 'system3x3: all 12 fields visible; other solver types unaffected',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="solver"]');
      await page.click('.solver-type-btn[data-type="system3x3"]');
      const allVisible = await page.evaluate(() => {
        const fields = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
        return fields.every((f) => getComputedStyle(document.querySelector(`.solver-field[data-field="${f}"]`)).display !== 'none');
      });
      assertEqual(allVisible, true, 'all 12 system3x3 fields visible');

      await page.click('.solver-type-btn[data-type="linear"]');
      const linearHidesRest = await page.evaluate(() => {
        const hidden = ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
        return hidden.every((f) => getComputedStyle(document.querySelector(`.solver-field[data-field="${f}"]`)).display === 'none');
      });
      assertEqual(linearHidesRest, true, 'linear type hides fields c through l');
    },
  },
];
