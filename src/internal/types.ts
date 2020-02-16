interface Opaque<T> {
  value: NonNullable<T>
  __type: symbol
}

export type Some<T> = Opaque<T> & { _: 'Some' }
export type None = Opaque<any> & { _: 'None' }
export type Ok<T> = Opaque<T> & { _: 'Ok' }
export type Error<T> = Opaque<T> & { _: 'Error' }

export type Option<T> = None | Some<T>
export type Result<A, B> = Ok<A> | Error<B>

export type UnaryFunction<T, R> = (source: T) => R
export type ExtractNonNullable<T> = T extends null | undefined ? never : T
export type MapFn<T, R> = (value: ExtractNonNullable<T>) => R

export type Predicate<A> = (value: A) => boolean
