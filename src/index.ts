import { minutesToSeconds } from './exercises/exercise-1-minutes-to-seconds'
import { nextNumber } from './exercises/exercise-2-next-number'
import { areaOfTriangle } from './exercises/exercise-3-area-of-triangle'
import { ageToDays } from './exercises/exercise-4-age-to-days'
import { calculatePower } from './exercises/exercise-5-power-calculator'
import { findFirstNumber } from './exercises/exercise-6-first-element-in-array'
import { hoursInSeconds } from './exercises/exercise-7-hours-to-seconds'

/**
 * converts 5 minutes to seconds in console
 */
console.log(minutesToSeconds(8))

/**
 * Takes the initialNumber and adds a value of 1, converting -3 to -2
 */
console.log(nextNumber(-3))

/**
 * Calculates area of a triangle from a base and height parameter
 */
console.log(areaOfTriangle(10, 10))

/**
 * Converts and amount of years to days
 */
console.log(ageToDays(26))

/**
 * Calculates power from voltage and current
 */
console.log(`${calculatePower(230, 20)} Watt`)

/**
 * Takes an array and returns the first number of the array
 */
console.log(findFirstNumber([4, 3, 8, 9]))

/**
 * Converts hours to seconds
 */
console.log(`${hoursInSeconds(0)} Seconds`)
