import { minutesToSeconds } from './exercises/exercise-1-minutes-to-seconds'
import { nextNumber } from './exercises/exercise-2-next-number'
import { areaOfTriangle } from './exercises/exercise-3-area-of-triangle'
import { ageToDays } from './exercises/exercise-4-age-to-days'
import { calculatePower } from './exercises/exercise-5-power-calculator'
import { findFirstNumber } from './exercises/exercise-6-first-element-in-array'
import { hoursInSeconds } from './exercises/exercise-7-hours-to-seconds'
import { remainder } from './exercises/exercise-8-remainder'
import { lessOrEqual } from './exercises/exercise-9-less-or-equal-zero'
import { lessThan100 } from './exercises/exercise-10-less-than-100'
import { andOperator } from './exercises/exercise-11-using-and-operator'
import { equalNumbers } from './exercises/exercise-12-equal-numbers'

/**
 * converts 5 minutes to seconds in console
 */
console.group('Exercise 1')
console.log(minutesToSeconds(8))
console.groupEnd()

/**
 * Takes the initialNumber and adds a value of 1, converting -3 to -2
 */
console.group('Exercise 2')
console.log(nextNumber(-3))
console.groupEnd()

/**
 * Calculates area of a triangle from a base and height parameter
 */
console.group('Exercise 3')
console.log(areaOfTriangle(10, 10))
console.groupEnd()

/**
 * Converts and amount of years to days
 */
console.group('Exercise 4')
console.log(ageToDays(26))
console.groupEnd()

/**
 * Calculates power from voltage and current
 */
console.group('Exercise 5')
console.log(calculatePower(230, 20))
console.groupEnd()

/**
 * Takes an array and returns the first number of the array
 */
console.group('Exercise 6')
console.log(findFirstNumber([4, 3, 8, 9]))
console.groupEnd()

/**
 * Converts hours to seconds
 */
console.group('Exercise 7')
console.log(hoursInSeconds(5))
console.groupEnd()

/**
 * Finds the remainder of a division with 2 numbers
 */
console.group('Exercise 8')
console.log(remainder(-9, 45))
console.groupEnd()

/**
 * checks is the input is less, equal or more than 0
 */
console.group('Exercise 9')
console.log(lessOrEqual(5))
console.groupEnd()

/**
 * Checks if the two numbers combined equals more or less than 100
 */
console.group('Exercise 10')
console.log(lessThan100(20, 50))
console.groupEnd()

/**
 * Checks if value a and b is true
 */
console.group('Exercise 11')
console.log(andOperator(true, true))
console.groupEnd()

/**
 * checks the two values and returns true if they're equal
 */
console.group('Exercise 12')
console.log(equalNumbers(2, 2))
console.groupEnd()
