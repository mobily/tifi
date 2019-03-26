import { Ok } from './Ok'
import { Error } from './Error'

import { Result } from '../internal/types'

export const fromFalsy = <A, B>(
  error: B,
  value: A | null | undefined,
): Result<A, B> => (Boolean(value) ? Ok(value) : Error(error))
