<h1 align="center">
  Tifi (abbreviation for There, I fixed it!)
</h1>

<blockquote align="center">
  🤓 Tifi is a library for functional programming in TypeScript. It solves a problem of the existence of both <code>undefined</code> and <code>null</code>. Tifi is inspired by the OCaml/Reason utilities for various data types.
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

<details>
<summary>Example</summary>

```typescript

// TODO

```

</details>

## Api Reference

  - [Option](#option)
    - [fromNullable](#fromnullable)
    - [fromFalsy](#fromfalsy)
    - [fromPredicate](#frompredicate)
    - [isSome](#issome)
    - [isNone](#isnone)
    - [flatMap](#flatmap)
    - [mapNullable](#mapnullable)
    - [map](#map)
    - [mapWithDefault](#mapwithdefault)
    - [getExn](#getexn)
    - [getWithDefault](#getwithdefault)
    - [match](#match)
    - [toNullable](#tonullable)
    - [toUndefined](#toundefined)
  - [List](#list)
    - [head](#head)
    - [tail](#tail)
    - [get](#get)
    - [getBy](#getby)
    - [take](#take)
    - [drop](#drop)
    - [splitAt](#splitat)
  - [Result](#result)
    - [fromNullable](#fromnullable-1)
    - [fromFalsy](#fromfalsy-1)
    - [fromPredicate](#frompredicate-1)
    - [isOk](#isok)
    - [isError](#iserror)
    - [flatMap](#flatmap-1)
    - [map](#map-1)
    - [mapWithDefault](#mapwithdefault-1)
    - [getExn](#getexn-1)
    - [getWithDefault](#getwithdefault-1)
    - [match](#match-1)

### Option

```typescript
type Option<T> = None | Some<T>
```

#### fromNullable

> If `value` is `null` or `undefined`, returns `None`, otherwise returns a value wrapped in `Some`.

`fromNullable<T>(value: T | null | undefined): Option<T>`

```typescript
fromNullable(null) // None
fromNullable('string') // Some('string')
```

#### fromFalsy

> If `value` is falsy, returns `None`, otherwise returns the value wrapped in `Some`.

`fromFalsy<T>(value: T): Option<T>`

```typescript
fromFalsy(null) // None
fromFalsy('') // None
fromFalsy(0) // None
fromFalsy('string') // Some('string')
fromFalsy(1) // Some(1)
```

#### fromPredicate

> If `predicate` returns `false`, returns `None`, otherwise returns a value wrapped in `Some`.

`fromPredicate<T>(predicate: (value: T) => boolean, value: T): Option<T>`

```typescript
fromPredicate(str => str.length > 10, 'string') // None
fromPredicate(obj => obj.prop === 'string', { prop: 'string' }) // Some({ props: 'string' })

const takeEvenNumber = fromPredicate<number>(x => x % 2 === 0)

takeEvenNumber(4) // Some(4)
takeEvenNumber(1) // None
```

#### isSome

> If `option` is `Some`, returns `true`.

`isSome<T>(option: Option<T>): boolean`

```typescript
const option = fromNullable('string') // Some('string')
isSome(option) // true
```

#### isNone

> If `option` is `None`, returns `true`.

`isNone<T>(option: Option<T>): boolean`

```typescript
const option = fromNullable(null) // None
isNone(option) // true
```

#### flatMap

> If `option` is `Some`, returns a result of `fn`, otherwise returns `None`. Function `fn` must have a return type of `Option`.

`flatMap<T, R>(fn: (value: T) => Option<R>, option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable('string'), // Some('string')
  flatMap(_ => Some(1)), // Some(1)
  getWithDefault(0), // 1
)

pipe(
  fromNullable(null), // None
  flatMap(_ => Some(1)), // None
  getWithDefault(0), // 0
)
```

#### mapNullable

> If a result of `fn` is `null` or `undefined` returns `None`.

`mapNullable<T, R>(fn: (value: T) => R, option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(null), // None
  mapNullable(_ => 1), // Some(1)
  getWithDefault(0), // 1
)
```

#### map

> If `option` is `Some`, returns `Some`, otherwise returns `None`.

`map<T, R>(fn: (value: T) => R, option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(1), // Some(1)
  map(n => n * 3), // Some(3)
  getWithDefault(0), // 3
)

pipe(
  fromNullable(null), // None
  map(_ => 1), // None
  getWithDefault(0), // 0
)
```

#### mapWithDefault

> If `option` is `Some`, returns a result of `fn`, otherwise returns `defaultValue` wrapped in `Some`.

`mapWithDefault<T, R>(defaultValue: R, fn: (value: T) => R, option: Option<T>): Option<R>`

```typescript
pipe(
  fromNullable(null), // None
  mapWithDefault(0, _ => 1), // Some(0)
  getExn, // 0
)

const mapWithDefaultZero = mapWithDefault(0)

pipe(
  fromNullable(null), // None
  mapWithDefaultZero(_ => 1), // Some(0)
  getExn, // 0
)
```

#### getExn

> If `option` is `Some`, returns `value` wrapped in `Some`, otherwise raises an error.

`getExn<T>(option: Option<T>): T | never`

```typescript
pipe(
  fromNullable('string'), // Some('string')
  flatMap(_ => None), // None
  getExn, // raises an error
)
```

#### getWithDefault

> If `option` is `Some`, returns `value` wrapped in `Some`, otherwise returns `defaultValue`.

`getWithDefault<T>(defaultValue: T, option: Option<T>): T`

```typescript
pipe(
  fromNullable(null), // None
  getWithDefault(1), // 1
)
```

#### match

> If `option` is `Some`, returns a result of `someFn`, otherwise returns a result of `noneFn`.

`match<T, R>(someFn: (value: T) => R, noneFn: () => R, option: Option<T>): R`

```typescript
pipe(
  fromNullable(2), // Some(2)
  match(n => n * 10, () => 0), // 20
)

const multiplyByTenIfSome = match<number, number>(n => n * 2)

pipe(
  fromNullable(2), // Some(2)
  multiplyByTenIfSome(() => 0), // 20
)

const returnZeroIfNone = <T>(fn: (str: T) => number) =>
  match<T, number>(fn, () => 0)

pipe(
  fromNullable(null), // None
  returnZeroIfNone(n => n * 10), // 0
)
```

#### toNullable

> If `option` is `Some`, returns `value`, otherwise returns `null`.

`toNullable<T>(option: Option<T>): T | null`

```typescript
pipe(
  fromNullable('string'), // Some('string')
  flatMap(_ => None), // None
  toNullable, // null
)
```

#### toUndefined

> If `option` is `Some`, returns `value`, otherwise returns `undefined`.

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

> If `list` is empty or the first value is `undefined` or `null`, returns `None`, otherwise returns the first element wrapped in `Some`.

`head<T>(list: T[]): Option<T>`

```typescript
pipe(
  head([1, 2, 3]), // Some(1)
  getWithDefault(0), // 1
)
```

#### tail

> If `list` is empty, returns `None`, otherwise returns everything except the first element of the list.

`tail<T>(list: T[]): Option<T[]>`

```typescript
pipe(
  tail([1, 2, 3]), // Some([2, 3])
  flatMap(list => get(2, list)), // None
  // or flatMap(get(2)), all functions are curried
  getWithDefault(0), // 0
)
```

#### get

> If `index` is larger than a list length, returns `None`, otherwise returns the nth element in the list wrapped in `Some`.

`get<T>(index: number, list: T[]): Option<T>`

```typescript
pipe(
  get(1, [1, 2, 3]), // Some(2)
  map(value => value * 2), // Some(4)
  getExn, // 4
)

const getThirdElement = get(2)

pipe(
  getThirdElement([1, 3, 6]), // Some(6)
  map(value => value * 2), // Some(12)
  getExn, // 12
)
```

#### getBy

> If no element satisfies `predicate`, returns `None`, otherwise returns the first value wrapped in `Some` that satisfies the predicate function.

`getBy<T>(predicate: (value: T, index: number) => boolean, list: T[]): Option<T>`

```typescript
pipe(
  getBy(str => str.length === 2, ['a', 'ab', 'bc']), // Some('ab')
  map(str => `${str}cde`), // Some('abcde')
  getWithDefault('xyz'), // abcde
)

const equalsTwo = getBy(value => value === 2)

pipe(
  equalsTwo([0, 2, 4]), // Some(2)
  map(n => n * 10), // Some(20)
  getWithDefault(0), // 20
)

pipe(
  equalsTwo([0, 4, 8]), // None
  map(n => n * 10), // None
  getWithDefault(0), // 0
)
```

#### take

> If `list` has fewer than `n` elements, returns `None`, otherwise returns a new array with the first `n` elements from `list`.

`take<T>(n: number, list: T[]): Option<T[]>`

```typescript
pipe(
  take(2, [1, 2, 3]), // Some([1, 2])
  flatMap(list => getBy(value => value % 2 === 0, list)), // Some(2)
  // or flatMap(getBy(value => value % 2 === 0)), all functions are curried
  getWithDefault(0), // 2
)

const takeThreeElements = take(3)

pipe(
  takeThreeElements([0, 2, 4, 6]), // Some([0, 2, 4])
  getWithDefault([]), // [0, 2, 4]
)

pipe(
  takeThreeElements([0, 2]), // None
  getWithDefault([]), // []
)
```

#### drop

> If `list` has fewer than `n` elements, returns `None`, otherwise returns a list obtained by dropping the first `n` elements.

`drop<T>(n: number, list: T[]): Option<T[]>`

```typescript
pipe(
  drop(1, [1, 2, 3]), // Some([2, 3])
  flatMap(head), // Some(2)
  getWithDefault(0), // 2
)

const dropThreeElements = drop(3)

pipe(
  dropThreeElements([]), // None
  flatMap(head), // None
  getWithDefault(0), // 0
)

pipe(
  dropThreeElements([1, 2, 3, 4, 5, 6]), // Some([4, 5, 6])
  flatMap(tail), // Some([5, 6])
  flatMap(head), // Some(5)
  getWithDefault(0), // 5
)
```

#### splitAt

> If `index` is larger than a list length, returns `None`, otherwise split a list at position `index`.

`splitAt<T>(index: number, list: T[]): Option<[T[], T[]]>`

```typescript
pipe(
  splitAt(2, [1, 2, 3, 4]), // Some([[1, 2], [3, 4]])
  flatMap(head), // Some([1, 2])
  flatMap(list => getBy(value => value % 2 === 0, list)), // Some(2)
  // or flatMap(getBy(value => value % 2 === 0)), all functions are curried
  getExn, // 2
)
```

### Result

```typescript
type Result<A, B> = Ok<A> | Error<B>
```

#### fromNullable

> If `value` is `null` or `undefined`, returns a value wrapped in `Error`, otherwise returns a value wrapped in `Ok`.

`fromNullable<A, B>(error: B, value: A | null | undefined): Result<A, B>`

```typescript
fromNullable('error', null) // Error('error')
fromNullable('error', 'string') // Ok('string')

const fromNullableWithError = fromNullable('error')

fromNullableWithError(null) // Error('error')
fromNullableWithError('string') // Ok('string')
```

#### fromFalsy

> If `value` is falsy, returns a value wrapped in `Error`, otherwise returns a value wrapped in `Ok`.

`fromFalsy<A, B>(error: B, value: A | null | undefined): Result<A, B>`

```typescript
fromFalsy('error', null) // Error('error')
fromFalsy('error', '') // Error('error')
fromFalsy('error', 0) // Error('error')
fromFalsy('error', 'string') // Ok('string')
fromFalsy('error', 1) // Ok(1)

const fromFalsyWithError = fromFalsy('error')

fromFalsyWithError(0) // Error('error')
fromFalsyWithError(1) // Ok(1)
```

#### fromPredicate

> If `predicate` returns `false`, returns a value wrapped in `Error`, otherwise returns a value wrapped in `Ok`.

`fromPredicate<A, B>(predicate: (value: A) => boolean, error: B, value: A): Result<A, B> `

```typescript
fromPredicate(str => str.length > 10, 'error', 'string') // Error('error')
fromPredicate(obj => obj.prop === 'string', 'error', { prop: 'string' }) // Ok({ props: 'string' })

const takeEvenNumber = fromPredicate<number, string>(
  x => x % 2 === 0,
  'error',
)

takeEvenNumber(4) // Ok(4)
takeEvenNumber(1) // Error('error')
```

#### isOk

> If `result` is `Ok`, returns `true`.

`isOk<A, B>(result: Result<A, B>): boolean`

```typescript
const result = fromNullable('error', 'string') // Ok('string')
isOk(result) // true
```

#### isError

> If `result` is `Error`, returns `true`.

`isError<A, B>(result: Result<A, B>): boolean`

```typescript
const result = fromNullable('error', null) // Error('error')
isError(result) // true
```

#### flatMap

> If `result` is `Ok`, returns the result of `fn`, otherwise returns `result` unchanged. Function `fn` must have a return type of `Result`.

`flatMap<A, B, R>(fn: (value: A) => Result<R, B>, result: Result<A, B>): Result<R, B>`

```typescript
pipe(
  fromNullable('error', null), // Error('error')
  flatMap(_ => Ok(1)), // Error('error')
  getWithDefault(0), // 0
)

pipe(
  fromNullable('error', 'string'), // Ok('string')
  flatMap(_ => Ok(1)), // Ok(1)
  getWithDefault(0), // 1
)
```

#### map

> If `result` is `Ok`,  returns the result of `fn`, otherwise returns `result` unchanged. Function `fn` takes a value of the same type as `value`.

`map<A, B, R>(fn: (value: A) => R, result: Result<A, B>): Result<R, B>`

```typescript
pipe(
  fromNullable('error', 1), // Ok(1)
  map(n => n * 3), // Ok(3)
  getWithDefault(0), // 3
)

pipe(
  fromNullable('error', null), // Error('error')
  map(n => n * 3), // Error('error')
  getWithDefault(0), // 0
)
```

#### mapWithDefault

> If `result` is `Ok`, returns a result of `fn`, otherwise returns `defaultValue` wrapped in `Ok`.

`mapWithDefault<A, B, R>(defaultValue: R, fn: (value: A) => R, result: Result<A, B>): Result<R, B>`

```typescript
pipe(
  fromNullable('error', null), // Error('error')
  mapWithDefault(0, _ => 1), // Ok(0)
  getExn, // 0
)

const fromNullableWithError = fromNullable('error')
const mapWithDefaultZero = mapWithDefault(0)

pipe(
  fromNullableWithError(null), // Error('error')
  mapWithDefaultZero(_ => 1), // Ok(0)
  getExn, // 0
)

pipe(
  fromNullableWithError(1), // Ok(1)
  mapWithDefaultZero(n => n * 10), // Ok(10)
  getExn, // 10
)
```

#### getExn

> If `result` is `Ok`, returns `value` wrapped in `Ok`, otherwise raises an error.

`getExn<A, B>(option: Result<A, B>): A | never`

```typescript
pipe(
  fromNullable('error', null), // Error('error')
  getExn, // raises an error
)
```

#### getWithDefault

> If `result` is `Ok`, returns `value` wrapped in `Ok`, otherwise returns `defaultValue`.

`getWithDefault<A, B>(defaultValue: A, result: Result<A, B>): A`

```typescript
pipe(
  fromNullable('error', null), // Error('error')
  getWithDefault(1), // 1
)
```

#### match

> If `result` is `Ok`, returns a result of `okFn`, otherwise returns a result of `errorFn`.

`match<A, B, R>(okFn: (okValue: A) => R, errorFn: (errorValue: B) => R, result: Result<A, B>): R`

```typescript
pipe(
  fromNullable('error', 2), // Ok(2)
  match(n => n * 10, () => 0), // 20
)

const fromNullableWithError = fromNullable('error')
const matchWithDefaultOk = match<string, string>(str => `${str}!`)
const matchWithDefaultError = <T>(fn: (str: T) => string) =>
  match<T, string, string>(fn, str => `${str} x2`)

pipe(
  fromNullableWithError('string'), // Ok('string')
  matchWithDefaultError(str => `${str}!`), // string!
)

 pipe(
  fromNullableWithError(null), // Error('error')
  matchWithDefaultError(str => `${str}!`), // error x2
)
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/tifi/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/tifi/commits?author=mobily" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
