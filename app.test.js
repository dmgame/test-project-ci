const getRandomInt = require('./getRandomInt');

test('getRandomInt generates a number less than the max', () => {
  const max = 10;
  const result = getRandomInt(max);
  expect(result).toBeLessThan(max);
});

test('getRandomInt generates a number greater than or equal to 0', () => {
  const max = 10;
  const result = getRandomInt(max);
  expect(result).toBeGreaterThanOrEqual(0);
});

test('getRandomInt generates an integer', () => {
  const max = 10;
  const result = getRandomInt(max);
  expect(result % 1).toBe(0);
});

test('getRandomInt throws an error if max is not a number', () => {
  expect(() => {
    getRandomInt('not a number');
  }).toThrow('max must be a number');
});
