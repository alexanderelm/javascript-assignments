/**
 * Function that looks through an array of string and sorts the strings by length
 * @param strings - The input array of string that is sorted
 * @returns The input array sorted by the length of the string, shortest first
 */
export const sortByLength = (strings: string[]) => {
  return strings.sort((a, b) => a.length - b.length)
}
