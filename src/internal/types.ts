interface Fn<T> {
  value: NonNullable<T>
  __type: symbol
}

export type Some<T> = Fn<T> & { _: 'Some' }
export type None = Fn<any> & { _: 'None' }
export type Ok<T> = Fn<T> & { _: 'Ok' }
export type Error<T> = Fn<T> & { _: 'Error' }

export type Option<T> = None | Some<T>
export type Result<A, B> = Ok<A> | Error<B>

export type UnaryFunction<T, R> = (source: T) => R
export type ExtractValue<T> = T extends NonNullable<infer R> ? R : never
