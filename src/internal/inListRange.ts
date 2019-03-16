export const inListRange = <T>(index: number, list: T[]): boolean =>
  index >= 0 && index <= list.length
