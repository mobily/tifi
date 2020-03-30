# Result

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
