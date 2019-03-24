import { Ok } from './Ok'
import { Error } from './Error'

import { isOk } from './isOk'

describe('isOk', () => {
  it('*', () => {
    expect(isOk(Ok('good'))).toBeTruthy()
    expect(isOk(Error('bad'))).toBeFalsy()
  })
})
