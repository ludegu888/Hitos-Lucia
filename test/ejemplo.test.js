const ejemplo = require('../ejemplo');  // <-- aquí importamos el archivo ejemplo.js

test('suma simple', () => {
  expect(ejemplo.sumar(1, 1)).toBe(2);  // usamos la función sumar del ejemplo.js
});
