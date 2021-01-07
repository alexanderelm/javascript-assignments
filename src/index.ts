import { minutesToSeconds } from './exercises/exercise-1-minutes-to-seconds'
import { nextNumber } from './exercises/exercise-2-next-number'
import { areaOfTriangle } from './exercises/exercise-3-area-of-triangle'
import { ageToDays } from './exercises/exercise-4-age-to-days'
import { calculatePower } from './exercises/exercise-5-power-calculator'
import { findFirstNumber } from './exercises/exercise-6-first-element-in-array'
import { hoursInSeconds } from './exercises/exercise-7-hours-to-seconds'
import { remainder } from './exercises/exercise-8-remainder'
import { lessOrEqual } from './exercises/exercise-9-less-or-equal-zero'
import { andOperator } from './exercises/exercise-11-using-and-operator'

/**
 * converts 5 minutes to seconds in console
 */
console.log('Exercise 1')
console.log(minutesToSeconds(8))

/**
 * Takes the initialNumber and adds a value of 1, converting -3 to -2
 */
console.log('Exercise 2')
console.log(nextNumber(-3))

/**
 * Calculates area of a triangle from a base and height parameter
 */
console.log('Exercise 3')
console.log(areaOfTriangle(10, 10))

/**
 * Converts and amount of years to days
 */
console.log('Exercise 4')
console.log(ageToDays(26))

/**
 * Calculates power from voltage and current
 */
console.log('Exercise 5')
console.log(calculatePower(230, 20))

/**
 * Takes an array and returns the first number of the array
 */
console.log('Exercise 6')
console.log(findFirstNumber([4, 3, 8, 9]))

/**
 * Converts hours to seconds
 */
console.log('Exercise 7')
console.log(hoursInSeconds(5))

/**
 * Finds the remainder of a division with 2 numbers
 */
console.log('Exercise 8')
console.log(remainder(-9, 45))

/**
 * checks is the input is less, equal or more than 0
 */
console.log(lessOrEqual(5))

/**
 * Checks if both first and seconds argument is true and returns true if it's the case, else it will return false
 */
console.log('Exercise 11')
console.log(andOperator(true, false))
