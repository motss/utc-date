<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@motss/utc-date</h1>

  <p>Generate JavaScript's UTC dates with various offsets</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]

[![Code of Conduct][coc-badge]][coc-url]
[![Codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat-badge]][codebeat-url]
[![codacy-badge]][codacy-url]
[![inch-badge]][inch-url]

> Returns a [JavaScript date object][date-mdn-url] using the [UTC][utc-url] timezone with optional offsets to adjust the `year`, `month`, or `date`.

## Table of contents

  - [Pre-requisites](#pre-requisites)
  - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
      - [Node.js](#nodejs)
      - [Native ES modules or TypeScript](#native-es-modules-or-typescript)
  - [API Reference](#api-reference)
    - [UTCDateOpts](#utcdateopts)
    - [utcDate([UTCDateOpts])](#utcdateutcdateoptsutc-date-opts-url)
    - [utcDateSync([UTCDateOpts])](#utcdatesyncutcdateoptsutc-date-opts-url)
  - [License](#license)

## Pre-requisites

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## Setup

### Install

```sh
# Install via NPM
$ npm install --save @motss/utc-date
```

### Usage

#### Node.js

```js
const {
  utcDate,
  // utcDateSync,
} = require('@motss/utc-date');

void async function main() {
  /** NOTE: Assuming today's date is '2020-02-02', */
  const defaultUTCDate = await utcDate(); // utcDateSync();
  const defaultUTCDateWithOffsets = await utcDate({
    offset: {
      year: 2,
      month: 1,
      date: 0,
    },
  });
  const specifiedUTCDate = await utcDate({
    startDate: '2030-03-02',
  });
  
  assert(defaultUTCDate, new Date('2020-02-02T00:00:00.000Z')); // OK
  assert(defaultUTCDateWithOffsets, new Date('2022-03-02T00:00:00.000Z')); // OK
  assert(specifiedUTCDate, new Date('2030-03-02T00:00:00.000Z')); // OK
}();
```

#### Native ES modules or TypeScript

```ts
// @ts-check

import {
  utcDate,
  // utcDateSync,
} from '@motss/utc-date';

void async function main() {
  /** NOTE: Assuming today's date is '2020-02-02', */
  const defaultUTCDate = await utcDate();
  const defaultUTCDateWithOffsets = await utcDate({
    offset: {
      year: 2,
      month: 1,
      date: 0,
    },
  });
  const specifiedUTCDate = await utcDate({
    startDate: '2030-03-02',
  });
  
  assert(defaultUTCDate, new Date('2020-02-02T00:00:00.000Z')); // OK
  assert(defaultUTCDateWithOffsets, new Date('2022-03-02T00:00:00.000Z')); // OK
  assert(specifiedUTCDate, new Date('2030-03-02T00:00:00.000Z')); // OK
}();
```

## API Reference

### UTCDateOpts

 - `offsets` <[Object][object-mdn-url]> Optional offset values when returning a [JavaScript Date object][date-mdn-url] using the [UTC][utc-url] timezone.
    - `year` <[number][number-mdn-url]> Optional offset to adjust the `year`.
    - `month` <[number][number-mdn-url]> Optional offset to adjust the `month`.
    - `date` <[number][number-mdn-url]> Optional offset to adjust the `date`.
- `startDate` <[string][string-mdn-url]|[number][number-mdn-url]|[Date][date-mdn-url]> Optional starting date. _Defaults to today's date if it is not given._

### utcDate([[UTCDateOpts][utc-date-opts-url]])

  - `UTCDateOpts` <[UTCDateOpts][utc-date-opts-url]> Optional configuration when returning a [JavaScript Date object][date-mdn-url] using the [UTC][utc-url] timezone.
  - returns: <[Promise][promise-mdn-url]&lt;[string][string-mdn-url]&gt;> Promise which resolves with a [JavaScript Date object][date-mdn-url] using the [UTC][utc-url] timezone.

### utcDateSync([[UTCDateOpts][utc-date-opts-url]])

This methods works the same as `utcDate([UTCDateOpts])` except that this is the synchronous version.

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng



[typescript-url]: https://github.com/Microsoft/TypeScript
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[utc-url]: https://en.wikipedia.org/wiki/Coordinated_Universal_Time

[utc-date-opts-url]: #utcdateopts

[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[date-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



[nodei-badge]: https://nodei.co/npm/@motss/utc-date.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/motss/utc-date.svg?style=flat-square

[version-badge]: https://img.shields.io/npm/v/@motss/utc-date.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/@motss/utc-date.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/f7a6646b-202f-4b73-ad9e-6f6eacc577de/badge?style=flat-square
[daviddm-badge]: https://img.shields.io/david/motss/utc-date.svg?style=flat-square

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[codecov-badge]: https://codecov.io/gh/motss/utc-date/branch/master/graph/badge.svg?style=flat-square
[coveralls-badge]: https://coveralls.io/repos/github/motss/utc-date/badge.svg?branch=master&style=flat-square

[codebeat-badge]: https://codebeat.co/badges/1ed02b65-dca8-45a5-8719-cdead763a617?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/1d15da734ee5424c8981d7e3e4d74c18?style=flat-square
[inch-badge]: http://inch-ci.org/github/motss/utc-date.svg?branch=master&style=flat-square



[nodei-url]: https://nodei.co/npm/utc-date

[travis-url]: https://travis-ci.org/motss/utc-date
[version-url]: https://npmjs.org/package/utc-date
[downloads-url]: http://www.npmtrends.com/utc-date
[mit-license-url]: https://github.com/motss/utc-date/blob/master/LICENSE
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/f7a6646b-202f-4b73-ad9e-6f6eacc577de
[daviddm-url]: https://david-dm.org/motss/utc-date

[coc-url]: https://github.com/motss/utc-date/blob/master/CODE_OF_CONDUCT.md
[codecov-url]: https://codecov.io/gh/motss/utc-date
[coveralls-url]: https://coveralls.io/github/motss/utc-date?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-utc-date-master
[codacy-url]: https://www.codacy.com/app/motss/utc-date?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/utc-date&amp;utm_campaign=Badge_Grade
[inch-url]: http://inch-ci.org/github/motss/utc-date
