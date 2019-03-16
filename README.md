<h1 align="center">
  Tifi
</h1>

<blockquote align="center">
  🤓 Tifi is a library for functional programming in TypeScript. It solves a problem of the existence of both <code>undefined</code> and <code>null</code>. It's also an abbreviation for <code>There, I fixed it</code>.
</blockquote>

<p align="center">
  <a href="https://travis-ci.com/mobily/tifi">
    <img src="https://img.shields.io/travis/com/mobily/tifi.svg?style=flat-square" alt="Build Status" />
  </a>
  <a href="https://coveralls.io/github/mobily/tifi?branch=master">
    <img src="https://img.shields.io/coveralls/github/mobily/tifi.svg?style=flat-square" alt="Coverage" />
  </a>
  <a href="https://www.npmjs.com/package/@mobily/tifi">
    <img src="https://img.shields.io/npm/v/@mobily/tifi.svg?style=flat-square" alt="npm" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  </a>
  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="All Contributors" />
  </a>
  <a href="https://github.com/mobily/tifi/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license" />
  </a>
</p>

## Installation

```shell
yarn add @mobily/tifi
```

or with `npm`

```shell
npm install @mobily/tifi --save
```

## Example

> TODO

## Api Reference

### Option

#### Some

#### None

#### fromNullable

> Returns `None` if the value is `null` or `undefined`, otherwise returns the value wrapped in a `Some`.

`fromNullable<T>(value: T | null | undefined): Option<T>`

```typescript
fromNullable(null) // None
fromNullable('string') // Some('string')
```

#### fromFalsy

> TODO

#### fromPredicate

> TODO

#### isSome

> TODO

#### isNone

> TODO

#### flatMap

> TODO

#### mapNullable

> TODO

#### map

> TODO

#### mapWithDefault

> TODO

#### getWithDefault

> TODO

#### toNullable

> TODO

#### toUndefined

> TODO

### List

#### head

> TODO

#### tail

> TODO

#### get

> TODO

#### getBy

> TODO

#### take

> TODO

#### drop

> TODO

#### splitAt

> TODO

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/tifi/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/tifi/commits?author=mobily" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
