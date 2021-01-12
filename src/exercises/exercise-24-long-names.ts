type Developer = {
  [key: string]: string
}

/**
 * Function that takes an object of type Developer and filters out items with a name longer than the length parameter
 * @param titles - The name and work title input
 * @param length - Max length to filter from with a default og 6 characters
 * @returns A Developer object without any items with a key of less characters than length
 */
export const getLongDevNames = (
  titles: Developer,
  length: number = 6
): Developer => {
  const filteredLongNames = Object.entries(titles).filter(([name]) => {
    return name.length > length
  })

  return Object.fromEntries(filteredLongNames)
}
