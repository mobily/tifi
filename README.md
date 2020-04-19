 # 🤓 Tifi &middot; [![Build Status](https://img.shields.io/travis/com/mobily/tifi.svg?style=flat-square&logo=travis)](https://travis-ci.com/mobily/tifi) [![Coverage](https://img.shields.io/coveralls/github/mobily/tifi.svg?style=flat-square&logo=coveralls)](https://coveralls.io/github/mobily/tifi?branch=master) [![npm](https://img.shields.io/npm/v/@mobily/tifi.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mobily/tifi) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/mobily/tifi/blob/master/LICENSE)

Tifi is an abbreviation for _There, I fixed it!_

> Tifi is a library for functional programming in TypeScript. It solves a problem of the existence of both <code>undefined</code> and <code>null</code>. Tifi is inspired by the OCaml/Reason utilities for various data types.

## Features

- [lightweight](https://bundlephobia.com/result?p=@mobily/tifi), no dependencies, less than 1kb
- type safety, full TypeScript support
- 100% test coverage
- get rid of `undefined` and `null` values in your project in a convenient, functional way
- all functions are [curried](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)

## Getting started

### Installation

```shell
yarn add @mobily/tifi
```

or with `npm`

```shell
npm install @mobily/tifi --save
```

## Api Reference

<!-- TOC:START - Do not remove or modify this section -->
<details>
<summary><code>Option</code></summary>

* [fromNullable](docs/option.md#fromnullable)
* [fromFalsy](docs/option.md#fromfalsy)
* [fromPredicate](docs/option.md#frompredicate)
* [isSome](docs/option.md#issome)
* [isNone](docs/option.md#isnone)
* [flatMap](docs/option.md#flatmap)
* [mapNullable](docs/option.md#mapnullable)
* [map](docs/option.md#map)
* [mapWithDefault](docs/option.md#mapwithdefault)
* [getExn](docs/option.md#getexn)
* [getWithDefault](docs/option.md#getwithdefault)
* [match](docs/option.md#match)
* [toNullable](docs/option.md#tonullable)
* [toUndefined](docs/option.md#toundefined)
</details>

<details>
<summary><code>List</code></summary>

* [head](docs/list.md#head)
* [tail](docs/list.md#tail)
* [get](docs/list.md#get)
* [getBy](docs/list.md#getby)
* [take](docs/list.md#take)
* [drop](docs/list.md#drop)
* [splitAt](docs/list.md#splitat)
</details>

<details>
<summary><code>Result</code></summary>

* [fromNullable](docs/result.md#fromnullable)
* [fromFalsy](docs/result.md#fromfalsy)
* [fromPredicate](docs/result.md#frompredicate)
* [isOk](docs/result.md#isok)
* [isError](docs/result.md#iserror)
* [flatMap](docs/result.md#flatmap)
* [map](docs/result.md#map)
* [mapWithDefault](docs/result.md#mapwithdefault)
* [getExn](docs/result.md#getexn)
* [getWithDefault](docs/result.md#getwithdefault)
* [match](docs/result.md#match)
</details>

<!-- TOC:END -->

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/tifi/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/tifi/commits?author=mobily" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
