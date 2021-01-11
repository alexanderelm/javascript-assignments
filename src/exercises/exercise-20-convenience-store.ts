import { roundToHalves } from '../utils/roundToHalves'

/**
 * Function that calculates total money from change and compares to a total price, all rounded with a factor of halves to follow the dkk currency
 * @param change - The amount of loose change you put in
 * @param total - The price of what the function checks if you have enough for
 */
export const enoughChange = (change: number[], total: number): boolean => {
  const summedMoney = change.reduce((acc, current) => {
    return acc + current
  }, 0)

  return roundToHalves(summedMoney) > roundToHalves(total)
}
