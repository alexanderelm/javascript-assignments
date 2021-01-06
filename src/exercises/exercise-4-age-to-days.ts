/**
 * This function takes an age set in years and converts it to days with the formula (x * 365) where x is the age in years
 * @param ageInYears The desired age in years
 * @returns The age set in the ageInYears parameter * 365
 */
export const ageToDays = (ageInYears: number): number => {
  return ageInYears * 365
}
