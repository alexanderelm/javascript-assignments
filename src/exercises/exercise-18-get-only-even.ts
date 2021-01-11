/**
 * Function that filters out uneven numbers from the numbers array
 * @param numbers - The input array that's filtered for even numbers
 * @returns The input array with only the even numbers
 */
export const getOnlyEven = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0)
}
