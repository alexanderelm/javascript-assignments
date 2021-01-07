/**
 * Function looks through an array for smallest and biggest value and returns them in a new array
 * @param numbers - The array of numbers to be checked for smallest and biggest value
 * @returns The smallest and biggest value in a number-array
 */
export const minMaxValue = (numbers: number[]): number[] => {
  const smallest = Math.min(...numbers)
  const biggest = Math.max(...numbers)

  return [smallest, biggest]
}
