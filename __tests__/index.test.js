import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('hola');
  expect(reverse('')).toEqual('');
});
