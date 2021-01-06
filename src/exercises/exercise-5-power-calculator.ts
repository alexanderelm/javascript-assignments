/**
 * Function that calculates power level from voltage and current with the formula (x * y = z) where x is voltage, y is current and z is the power
 * @param voltage Takes the amount of voltage in volt
 * @param current Takes the amount of current in amp
 * @returns Power in Watt
 */
export const power = (voltage: number, current: number): number => {
  return voltage * current
}
