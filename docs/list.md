# List

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
