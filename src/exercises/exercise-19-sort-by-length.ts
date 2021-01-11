/**
 *
 * @param strings
 * @returns The input array sorted by the length of the string, shortest first
 */
export const sortByLength = (strings: string[]) => {
  return strings.sort((a, b) => (a.length - b.length))
}
