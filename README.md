# levenary

[![npm-version](https://img.shields.io/npm/v/levenary.svg)](https://www.npmjs.com/package/levenary)
[![github-actions](https://github.com/tanhauhau/levenary/workflows/CI/badge.svg)](https://github.com/tanhauhau/levenary/actions)

> Given a string, A and an array of strings XS, return the string X from XS whose Levenshtein distance from A is minimal.


## Install

```
$ npm install levenary
```


## Usage

```js
import levenary from 'levenary';

levenary('cat', ['cow', 'dog', 'pig']);
//=> 'cow'
```

## Why `levenary`?
1. Based on [leven](https://github.com/sindresorhus/leven), JS implementation of the [Levenshtein distance algorithm](https://en.wikipedia.org/wiki/Levenshtein_distance)
1. Only 1 API. Simple and clean. If you want more, please use [didyoumean2](https://www.npmjs.com/package/didyoumean2).
1. [Flow](http://flow.org/) and [TypeScript](http://typescriptlang.org/) support.

## Benchmark

```
$ npm run bench
```

```
                      50 words, length max=15 min=5 avr=8.4
         181,539 op/s » fastest-levenshtein
          55,712 op/s » levenary
          19,996 op/s » didyoumean
          38,346 op/s » didyoumean2

                      20 sentences, length max=106 min=30 avr=64.4
          26,641 op/s » fastest-levenshtein
           3,356 op/s » levenary
           4,970 op/s » didyoumean
           2,549 op/s » didyoumean2
```

