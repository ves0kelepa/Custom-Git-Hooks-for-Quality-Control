const buggy = require('./test.js');

test('buggy returns 4', () => {
  expect(buggy()).toBe(4);
});