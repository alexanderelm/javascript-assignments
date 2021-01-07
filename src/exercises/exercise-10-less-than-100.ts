/**
 * Function that adds the a and b parameter together and checks if it equals less than 100, returning true if the value is less than 100 and returning false if it's not
 * @param a - First parameter to be added with second parameter
 * @param b - Second parameter to be added with the first parameter
 * @returns True if the a and b equals less than 100 combined
 */
export const lessThan100 = (a: number, b: number): boolean => {
  return a + b < 100
}
