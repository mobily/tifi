interface OptionFn<T> {
  value: NonNullable<T>
  __type: symbol
}

interface ResultFn<T> {
  value: T
  __type: symbol
}

export type Some<T> = OptionFn<T> & { _: 'Some' }
export type None = OptionFn<any> & { _: 'None' }
export type Ok<T> = ResultFn<T> & { _: 'Ok' }
export type Error<T> = ResultFn<T> & { _: 'Error' }

export type Option<T> = None | Some<T>
export type Result<A, B> = Ok<A> | Error<B>

export type UnaryFunction<T, R> = (source: T) => R
