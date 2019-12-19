import levenary from './index.mjs';

it('should work', () => {
  expect(levenary('cat', ['cow', 'dog', 'pig'])).toBe('cow');
});

it('handle empty array', () => {
  expect(levenary('cat', [])).toBeUndefined();
});
