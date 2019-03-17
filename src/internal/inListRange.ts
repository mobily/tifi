export const inListRange = <T>(n: number, list: T[]): boolean =>
  n >= 0 && n <= list.length
