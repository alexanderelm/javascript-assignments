/**
 * Function that checks if both the a and b parameter is true
 * @param a - First parameter to be checked if its true or false
 * @param b - Second parameter to be checked if its true or false
 * @returns True if a is true and b is true, if either a or b is false it will return false
 */
export const andOperator = (a: boolean, b: boolean): boolean => {
  return a && b
}
