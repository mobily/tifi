import { Ok } from './Ok'
import { Error } from './Error'

import { isError } from './isError'

describe('isError', () => {
  it('*', () => {
    expect(isError(Ok('good'))).toBeFalsy()
    expect(isError(Error('bad'))).toBeTruthy()
  })
})
