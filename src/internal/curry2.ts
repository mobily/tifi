export function curry2<X, Y, Z>(fn: (arg0: X, arg1: Y) => Z) {
  return function curry(arg0: X, arg1?: Y) {
    if (arguments.length === 1) {
      return (arg: Y) => curry(arg0, arg)
    }

    return fn(arg0, arg1 as Y)
  }
}
