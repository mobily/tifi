# Option

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
