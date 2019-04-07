<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">utc-date</h1>

  <p>Generate JavaScript's UTC dates with various offsets</p>
</div>

<hr />

<a href="https://www.buymeacoffee.com/RLmMhgXFb" target="_blank" rel="noopener noreferrer"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 20px !important;width: auto !important;" ></a>
[![tippin.me][tippin-me-badge]][tippin-me-url]
[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Returns a [JavaScript date object][date-mdn-url] using the [UTC][utc-url] timezone with optional offsets to adjust the `year`, `month`, or `date`.

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Setup](#setup)
- [Install](#install)
- [Usage](#usage)
  - [TypeScript or ES Modules](#typescript-or-es-modules)
  - [Node.js](#nodejs)
  - [Browser](#browser)
    - [ES Modules](#es-modules)
    - [IIFE](#iife)
- [API Reference](#api-reference)
  - [UTCDateParams](#utcdateparams)
  - [utcDate([UTCDateParams])](#utcdateutcdateparams)
  - [utcDateSync([UTCDateParams])](#utcdatesyncutcdateparams)
- [Related works](#related-works)
- [License](#license)

## Pre-requisites

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## Setup

## Install

```sh
# Install via NPM
$ npm install --save @motss/utc-date
```

## Usage

### TypeScript or ES Modules

```ts
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
      day: 0,
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

### Node.js

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
      day: 0,
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

### Browser

#### ES Modules

```html
<script type="module">
  import { utcDate } from 'https://unpkg.com/@motss/utc-date@latest/dist/utc-date.js';

  utcDate()
    .then(console.log)
    .catch(console.error);
</script>
```

#### IIFE

```html
<script src="https://unpkg.com/@motss/utc-date@latest/dist/utc-date.iife.js"></script>
<script>
  const { utcDate } = window.UTCDate;

  utcDate()
    .then(console.log)
    .catch(console.error);
</script>
```

## API Reference

### UTCDateParams

- `offsets` <[?Object][object-mdn-url]> Optional offset values when returning a [JavaScript Date object][date-mdn-url] using the [UTC][utc-url] timezone.
  - `year` <[?number][number-mdn-url]> Optional offset to adjust the `year`.
  - `month` <[?number][number-mdn-url]> Optional offset to adjust the `month`.
  - `day` <[?number][number-mdn-url]> Optional offset to adjust the `day`.
- `startDate` <[?string][string-mdn-url]|[?number][number-mdn-url]|[?Date][date-mdn-url]> Optional starting date. _Defaults to today's date if it is not given._

### utcDate([UTCDateParams])

- `UTCDateParams` <[?UTCDateParams][utc-date-opts-url]> Optional configuration when returning a [JavaScript Date object][date-mdn-url] using the [UTC][utc-url] timezone.
- returns: <[Promise][promise-mdn-url]&lt;[Date][date-mdn-url]&gt;> Promise which resolves with a [JavaScript Date object][date-mdn-url] using the [UTC][utc-url] timezone.

### utcDateSync([UTCDateParams])

This methods works the same as `utcDate([UTCDateParams])` except that this is the synchronous version.

## Related works

- [utc-time][utc-time-url] - Manipulate UTC Time with ease in JavaScript

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[utc-url]: https://en.wikipedia.org/wiki/Coordinated_Universal_Time
[utc-time-url]: https://github.com/motss/utc-time

[utc-date-opts-url]: #utcdateparams

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

<!-- Badges -->
[tippin-me-badge]: https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@igarshmyb/F0918E
[follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/@motss/utc-date?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/@motss/utc-date
[mit-license-badge]: https://flat.badgen.net/npm/license/@motss/utc-date

[downloads-badge]: https://flat.badgen.net/npm/dm/@motss/utc-date
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@motss/utc-date?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@motss/utc-date
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@motss/utc-date

[circleci-badge]: https://flat.badgen.net/circleci/github/motss/utc-date?icon=circleci
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/utc-date
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/utc-date?label=codecov&icon=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/utc-date?label=coveralls

[codebeat-badge]: https://codebeat.co/badges/1ed02b65-dca8-45a5-8719-cdead763a617?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/1d15da734ee5424c8981d7e3e4d74c18?style=flat-square
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[tippin-me-url]: https://tippin.me/@igarshmyb
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/utc-date

[version-url]: https://www.npmjs.com/package/@motss/utc-date
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/motss/utc-date/blob/master/LICENSE

[downloads-url]: http://www.npmtrends.com/@motss/utc-date
[packagephobia-url]: https://packagephobia.now.sh/result?p=%40motss%2Futc-date
[bundlephobia-url]: https://bundlephobia.com/result?p=@motss/utc-date

[circleci-url]: https://circleci.com/gh/motss/utc-date/tree/master
[daviddm-url]: https://david-dm.org/motss/utc-date
[codecov-url]: https://codecov.io/gh/motss/utc-date
[coveralls-url]: https://coveralls.io/github/motss/utc-date?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-utc-date-master
[codacy-url]: https://www.codacy.com/app/motss/utc-date?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/utc-date&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/utc-date/blob/master/CODE_OF_CONDUCT.md
