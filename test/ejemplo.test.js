const ejemplo = require('../ejemplo');

test('suma simple', () => {
  // Esto fallará a propósito
  expect(ejemplo.sumar(1, 1)).toBe(2);
});
