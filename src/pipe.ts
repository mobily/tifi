import { UnaryFunction } from './internal/types'

export function pipe<T, R>(source: T, result: UnaryFunction<T, R>): R

export function pipe<T, A, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  result: UnaryFunction<A, R>,
): R

export function pipe<T, A, B, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  result: UnaryFunction<B, R>,
): R

export function pipe<T, A, B, C, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  result: UnaryFunction<C, R>,
): R

export function pipe<T, A, B, C, D, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  result: UnaryFunction<D, R>,
): R

export function pipe<T, A, B, C, D, E, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  result: UnaryFunction<E, R>,
): R

export function pipe<T, A, B, C, D, E, F, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  op6: UnaryFunction<E, F>,
  result: UnaryFunction<F, R>,
): R

export function pipe<T, A, B, C, D, E, F, G, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  op6: UnaryFunction<E, F>,
  op7: UnaryFunction<F, G>,
  result: UnaryFunction<G, R>,
): R

export function pipe<T, A, B, C, D, E, F, G, H, R>(
  source: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  op6: UnaryFunction<E, F>,
  op7: UnaryFunction<F, G>,
  op8: UnaryFunction<G, H>,
  result: UnaryFunction<H, R>,
): R

export function pipe<T, R>(source: T, ...fns: any[]): R {
  return fns.reduce((prev, fn) => fn(prev), source as any)
}
