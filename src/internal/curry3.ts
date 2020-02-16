export function curry3<W, X, Y, Z>(fn: (arg0: W, arg1: X, arg2: Y) => Z) {
  return function curry(arg0: W, arg1?: X, arg2?: Y) {
    if (arguments.length === 1) {
      return (x: X) => curry(arg0, x)
    }

    if (arguments.length === 2) {
      return (y: Y) => curry(arg0, arg1, y)
    }

    return fn(arg0, arg1 as X, arg2 as Y)
  }
}
