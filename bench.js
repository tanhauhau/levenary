/* globals bench suite */
'use strict';
const didYouMean = require('didyoumean');
const didYouMean2 = require('didyoumean2').default;
const levenary = require('.').default;

function run(fn) {
  fn('abcdefghij', [
    'abc*******',
    'abcd******',
    'abcde*****',
    'ABCDEF****',
    'abcde*g***',
    'abcdef****',
  ]);
  fn('cat', ['cow', 'dog', 'pig']);
}

suite('levenary', () => {
  bench('levenary', () => {
    run(levenary);
  });

  bench('didyoumean', () => {
    run(didYouMean);
  });

  bench('didyoumean2', () => {
    run(didYouMean2);
  });
});
