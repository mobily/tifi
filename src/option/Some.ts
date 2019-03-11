import { Some as OpaqueSome } from '../internal/types'

export const Some = <T>(value: NonNullable<T>): OpaqueSome<T> =>
  value as OpaqueSome<T>
