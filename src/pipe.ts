import { Option, UnaryFunction } from './internal/types'

export function pipe<T, R>(
  source: Option<T>,
  result: UnaryFunction<Option<T>, R>,
): R

export function pipe<T, A, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  result: UnaryFunction<Option<A>, R>,
): R

export function pipe<T, A, B, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  result: UnaryFunction<Option<B>, R>,
): R

export function pipe<T, A, B, C, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  op3: UnaryFunction<Option<B>, Option<C>>,
  result: UnaryFunction<Option<C>, R>,
): R

export function pipe<T, A, B, C, D, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  op3: UnaryFunction<Option<B>, Option<C>>,
  op4: UnaryFunction<Option<C>, Option<D>>,
  result: UnaryFunction<Option<D>, R>,
): R

export function pipe<T, A, B, C, D, E, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  op3: UnaryFunction<Option<B>, Option<C>>,
  op4: UnaryFunction<Option<C>, Option<D>>,
  op5: UnaryFunction<Option<D>, Option<E>>,
  result: UnaryFunction<Option<E>, R>,
): R

export function pipe<T, A, B, C, D, E, F, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  op3: UnaryFunction<Option<B>, Option<C>>,
  op4: UnaryFunction<Option<C>, Option<D>>,
  op5: UnaryFunction<Option<D>, Option<E>>,
  op6: UnaryFunction<Option<E>, Option<F>>,
  result: UnaryFunction<Option<F>, R>,
): R

export function pipe<T, A, B, C, D, E, F, G, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  op3: UnaryFunction<Option<B>, Option<C>>,
  op4: UnaryFunction<Option<C>, Option<D>>,
  op5: UnaryFunction<Option<D>, Option<E>>,
  op6: UnaryFunction<Option<E>, Option<F>>,
  op7: UnaryFunction<Option<F>, Option<G>>,
  result: UnaryFunction<Option<G>, R>,
): R

export function pipe<T, A, B, C, D, E, F, G, H, R>(
  source: Option<T>,
  op1: UnaryFunction<Option<T>, Option<A>>,
  op2: UnaryFunction<Option<A>, Option<B>>,
  op3: UnaryFunction<Option<B>, Option<C>>,
  op4: UnaryFunction<Option<C>, Option<D>>,
  op5: UnaryFunction<Option<D>, Option<E>>,
  op6: UnaryFunction<Option<E>, Option<F>>,
  op7: UnaryFunction<Option<F>, Option<G>>,
  op8: UnaryFunction<Option<G>, Option<H>>,
  result: UnaryFunction<Option<H>, R>,
): R

export function pipe<T, R>(
  source: Option<T>,
  ...fns: Array<UnaryFunction<any, any>>
): R {
  return fns.reduce((prev, fn) => fn(prev), source as any)
}
