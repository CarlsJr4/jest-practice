const exp = require('constants');
const reverseString = require('./reverseString');
const { execPath } = require('process');

test('Reverse any given string', () => {
  expect(reverseString('Dave')).toBe('evaD');
});
