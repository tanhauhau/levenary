/* globals bench suite */
'use strict';
const didYouMean = require('didyoumean');
const didYouMean2 = require('didyoumean2').default;
const {closest} = require('fastest-levenshtein')
const levenary = require('.').default;

function wordBench(fn) {
	fn(word, words)
}

function sentenceBench(fn) {
	fn(sentence, sentences)
}

function paragraphBench(fn) {
	fn(paragraph, paragraphs)
}

suite('50 words, length max=15 min=5 avr=8.4', () => {
  bench('fastest-levenshtein', () => {
    wordBench(closest);
  });

  bench('levenary', () => {
    wordBench(levenary);
  });

  bench('didyoumean', () => {
    wordBench(didYouMean);
  });

  bench('didyoumean2', () => {
    wordBench(didYouMean2);
  });
});

suite('20 sentences, length max=106 min=30 avr=64.4', () => {
  bench('fastest-levenshtein', () => {
    sentenceBench(closest);
  });

  bench('levenary', () => {
    sentenceBench(levenary);
  });

  bench('didyoumean', () => {
    sentenceBench(didYouMean);
  });

  bench('didyoumean2', () => {
    sentenceBench(didYouMean2);
  });
});

const word = 'concession'
const sentence = 'He wasn\'t bitter that she had moved on but from the radish.'

const words = [
	'lyophilizing',
	'vizierate',
	'bucklered',
	'gonglike',
	'moperies',
	'regales',
	'sublates',
	'expecter',
	'implorers',
	'whump',
	'candygram',
	'beblooding',
	'parceled',
	'pledgor',
	'elegiac',
	'agnates',
	'narrowed',
	'dewlapped',
	'sensationally',
	'distal',
	'demijohn',
	'myxamoebae',
	'eosin',
	'buckets',
	'parvis',
	'ticcing',
	'uncaged',
	'cantors',
	'superstructural',
	'drowse',
	'autoimmune',
	'echinoid',
	'interschool',
	'scrumptious',
	'legionnaire',
	'kwanza',
	'gallicas',
	'joying',
	'cobras',
	'slinkinesses',
	'nubilous',
	'sandlings',
	'moldinesses',
	'glutaraldehydes',
	'align',
	'upreach',
	'remotions',
	'scotches',
	'killed',
	'poleyns'
];

const sentences = [
	'The beach was crowded with snow leopards.',
	'Your girlfriend bought your favorite cookie crisp cereal but forgot to get milk.',
	'I love eating toasted cheese and tuna sandwiches.',
	'Wisdom is easily acqui                       be called a beach if there was no sand.',
	'He was the type of guy who liked Christmas lights on his house in the middle of July.',
	'As the years pass by, we all know owners look more and more like their dogs.',
	'The shark-infested South Pine channel was the only way in or out.',
	'She tilted her head back and let whip cream stream into her mouth while taking a bath.',
	'He had unknowingly taken up sleepwalking as a nighttime hobby.',
	'He wasn\'t bitter that she had moved on but from the radish.',
	'I am never at home on Sundays.',
	'Each person who knows you has a different perception of who you are.',
	'She was too short to see over the fence.',
	'Let me help you with your baggage.',
	'He realized there had been several deaths on this road, but his concern rose when he saw the exact number.',
	'She had some amazing news to share but nobody to share it with.',
	'Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon.',
	'There are no heroes in a punk rock band.',
	'The snow-covered path was no help in finding his way out of the back-country.'
];


