/**
 * Function that sums an amount of numbers differentiating with 1 up to n times
 * @param n - The amount of numbers in the calculation
 * @returns The summed amount up to the given value
 */
export const addNumbers = (n: number): number => {
  return (n * (n + 1)) / 2
}
