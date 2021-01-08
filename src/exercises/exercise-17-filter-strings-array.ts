/**
 * Function that filters out items with the type of string from the array filterItems
 * @param filterItems - Any values int the array that's not a string
 * @returns An array without any strings
 */
export const filterOutStrings = (filterItems: any[]): number[] => {
  return filterItems.filter((itemInArray) => typeof itemInArray === 'number')
}
