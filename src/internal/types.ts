interface Fn<T> {
  value: NonNullable<T>
  __type: symbol
}

export type Some<T> = Fn<T> & { _: 'Some' }
export type None = Fn<any> & { _: 'None' }

export type Option<T> = None | Some<T>
export type UnaryFunction<T, R> = (source: T) => R
