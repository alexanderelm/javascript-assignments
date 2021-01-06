/**
 * Function that takes an amount of hours and converts it to seconds by taking (hours * oneHourInSeconds)
 * @param hours - Amount of hours that is to be converted to seconds
 * @returns Hours in seconds
 */
export const hoursInSeconds = (hours: number): number => {
  if (hours <= 0) throw new Error('Must be a positive number')

  const oneHourInSeconds = 3600

  return hours * oneHourInSeconds
}
