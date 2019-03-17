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

```typescript
type Option<T> = None | Some<T>
```

#### Some

#### None

#### fromNullable

> If the value is `null` or `undefined`, returns `None`, otherwise returns the value wrapped in a `Some`.

`fromNullable<T>(value: T | null | undefined): Option<T>`

```typescript
fromNullable(null) // None
fromNullable('string') // Some('string')
```

#### fromFalsy

> If the value is falsy, returns `None`, otherwise returns the value wrapped in a `Some`.

`fromFalsy<T>(value: T): Option<T>`

```typescript
fromFalsy(null) // None
fromFalsy('') // None
fromFalsy(0) // None
fromFalsy('string') // Some('string')
fromFalsy(1) // Some(1)
```

#### fromPredicate

> If the predicate returns `false`, returns `None`, otherwise returns the value wrapped in a `Some`.

`fromPredicate<T>(predicate: (value: T) => boolean, value: T): Option<T>`

```typescript
fromPredicate(str => str.length > 10, 'string') // None
fromPredicate(obj => obj.prop === 'string', { prop: 'string' }) // Some({ props: 'string' })
```

#### isSome

> If the option is an instance of `Some`, returns `true`.

`isSome<T>(option: Option<T>): boolean`

```typescript
const option = fromNullable('string') // Some('string')
isSome(option) // true
```

#### isNone

> If the option is `None`, returns `true`.

`isNone<T>(option: Option<T>): boolean`

```typescript
const option = fromNullable(null) // None
isNone(option) // true
```

#### flatMap

> If the option is `Some` value, returns the result of `fn`, otherwise returns `None`. The function `fn` must have a return type of `Option<T>`.

`flatMap<T, R>(fn: (value: T) => Option<R>) => (option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(null), // None
  flatMap(_ => Some(1)), // Some(1)
  getWithDefault(0), // 1
)
```

#### mapNullable

> If the value returned from `fn` is `null` or `undefined` returns `None`.

`mapNullable<T, R>(fn: (value: T) => R) => (option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(null), // None
  mapNullable(_ => 1), // Some(1)
  getWithDefault(0), // 1
)
```

#### map

> If the option is `Some` value, returns `Some`, otherwise returns `None`.

`map<T, R>(fn: (value: T) => R) => (option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(null), // None
  map(_ => 1), // None
  getWithDefault(0), // 0
)
```

#### mapWithDefault

> If the option is `Some` value, returns the result of `fn`, otherwise returns `defaultValue`.

`mapWithDefault<T, R>(defaultValue: R, fn: (value: T) => R) => (option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(null), // None
  mapWithDefault(0, _ => 1), // Some(0)
  get, // 0
)
```

#### getWithDefault

> If the option is `Some` value, returns `value`, otherwise returns `defaultValue`.

`getWithDefault<T>(defaultValue: T) => (option: Option<T>): T`

```typescript
pipe(
  fromNullable(null), // None
  getWithDefault(1), // 1
)
```

#### toNullable

> If the option is `Some` value, returns `value`, otherwise returns `null`.

`toNullable<T>(option: Option<T>): T | null`

```typescript
pipe(
  fromNullable('string'), // Some('string')
  flatMap(_ => None), // None
  toNullable, // null
)
```

#### toUndefined

> If the option is `Some` value, returns `value`, otherwise returns `undefined`.

`toUndefined<T>(option: Option<T>): T | undefined`

```typescript
pipe(
  fromNullable('string'), // Some('string')
  flatMap(_ => None), // None
  toUndefined, // undefined
)
```

### List

#### head

> If the list is empty or the first value is `undefined` or `null`, returns `None`, otherwise returns the first element in the list wrapped in a `Some`.

`head<T>(list: T[]): Option<T>`

```typescript
pipe(
  head([1, 2, 3]), // Some(1)
  getWithDefault(0), // 1
)
```

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
