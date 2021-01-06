/**
 * Function that takes an amount of hours and converts it to seconds by taking (hours * 3600)
 * @param hours - Amount of hours that is to be converted to seconds
 * @returns Hours in seconds
 */
export const hoursInSeconds = (hours: number): number => {
  return hours * 3600
}
