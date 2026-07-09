function assertEqual(actual, expected, message) {
  const same = (typeof actual === 'object' && actual !== null) || (typeof expected === 'object' && expected !== null)
    ? JSON.stringify(actual) === JSON.stringify(expected)
    : actual === expected;
  if (!same) {
    throw new Error(`${message}\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`);
  }
}

function assertTrue(actual, message) {
  if (!actual) {
    throw new Error(`${message}\n  expected truthy, got: ${JSON.stringify(actual)}`);
  }
}

module.exports = { assertEqual, assertTrue };
