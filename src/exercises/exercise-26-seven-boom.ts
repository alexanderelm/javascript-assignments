/**
 * Function that takes an array of numbers, converts it to a string and splits it up on single numbers, then checks if 7 is included on the string
 * @param numbers - The input array of numbers
 * @returns A string dependant on weather splitToDigits is truthy or falsy
 */
export const sevenBoom = (numbers: number[]): string => {
  const splitToDigits = numbers.toString().split('').map(Number).includes(7)

  return splitToDigits ? 'Boom!' : 'There is no 7 in the array'
}
