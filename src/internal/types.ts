export type Some<T> = NonNullable<T> & { _: 'Some' }
export type None = symbol & { _: 'None' }

export type Option<T> = None | Some<T>
export type UnaryFunction<T, R> = (source: T) => R
