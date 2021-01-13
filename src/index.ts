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
import { addNumbers } from './exercises/exercise-13-add-up-numbers'
import { minMaxValue } from './exercises/exercise-14-smallest-to-biggest-number'
import {
  sortDrinkByPrice,
  testDrinks,
} from './exercises/exercise-15-drinks-sorting'
import { findPotatoes } from './exercises/exercise-16-find-potatoes'
import { filterOutStrings } from './exercises/exercise-17-filter-strings-array'
import { getOnlyEven } from './exercises/exercise-18-get-only-even'
import { sortByLength } from './exercises/exercise-19-sort-by-length'
import { enoughChange } from './exercises/exercise-20-convenience-store'
import { sumBudgets } from './exercises/exercise-21-sum-of-budget'
import { freeShipping } from './exercises/exercise-22-online-shopping'
import { expensiveOrders } from './exercises/exercise-23-expensive-orders'
import { getLongDevNames } from './exercises/exercise-24-long-names'
import { sortByLastName } from './exercises/exercise-25-sort-last-names'
import { sortByLastNameSmart } from './exercises/exercise-25-with-better-data'

/**
 * Converts 5 minutes to seconds in console
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
 * Checks is the input is less, equal or more than 0
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
 * Checks the two values and returns true if they're equal
 */
console.group('Exercise 12')
console.log(equalNumbers(2, 2))
console.groupEnd()

/**
 * Sums the numbers up to the number defined (1 + 2 + 3 ...n)
 */
console.group('Exercise 13')
console.log(addNumbers(600))
console.groupEnd()

/**
 * Looks over the the array input and finds the smallest and biggest value
 */
console.group('Exercise 14')
console.log(minMaxValue([1, 3, 2]))
console.groupEnd()

/**
 * Sorts arrays with the parameters name and price, by price
 */
console.group('Exercise 15')
console.log(
  sortDrinkByPrice([
    { name: 'johnny', price: 5 },
    { name: 'simon', price: 22 },
  ])
)
console.log(testDrinks)
console.groupEnd()

/**
 * Checks the amount of times potato is found in the string
 */
console.group('Exercise 16')
console.log(
  findPotatoes(
    'potatopotatopotatopotatopotatopotatopotatopotatopotatopotatopotatopotatoapplepotatopotatopotatopotatopotatopotatopotatopotato'
  )
)
console.groupEnd()

/**
 * Filters out strings from array
 */
console.group('Exercise 17')
console.log(filterOutStrings([1, 'anders', 'john', 3]))
console.groupEnd()

/**
 * Filters out uneven numbers
 */
console.group('Exercise 18')
console.log(getOnlyEven([1, 4, 3, 5, 7, 2, 8]))
console.groupEnd()

/**
 * Sorts and array of string by the length of the string, shortest first
 */
console.group('Exercise 19')
console.log(sortByLength(['hey', 'John', 'megetLangString', 'enToEnTo']))
console.groupEnd()

/**
 * Sums up and rounds the total value of change and checks if theres enough to effort the total
 */
console.group('Exercise 20')
console.log(enoughChange([1, 2.3, 5, 3.9], 44))
console.groupEnd()

/**
 * Sums up the budget of input objects
 */
console.group('Exercise 21')
console.log(
  sumBudgets([
    { name: 'john', age: 21, budget: 19600 },
    { name: 'Alex', age: 24, budget: 20000 },
    { name: 'Martin', age: 16, budget: 2700 },
  ])
)
console.groupEnd()

/**
 * Sums the price of all the entries and checks weather or not the cart value is above the threshold of free shipping
 */
console.group('Exercise 22')
console.log(freeShipping({ shampoo: 30, citron: 20 }))
console.groupEnd()

/**
 * Filters out items with a value of less than the cost
 */
console.group('Exercise 23')
console.log(
  expensiveOrders({ john: 40, lars: 50, loldemort: 150, morten: 200 }, 100)
)
console.groupEnd()

/**
 * Filters out items with a key of less characters than the length parameter
 */
console.group('Exercise 24')
console.log(
  getLongDevNames({
    alexander: 'developer',
    martin: 'long developer name',
    Christoffer: 'head of development',
  })
)
console.groupEnd()

/**
 * Sorts objects by author last name
 */
console.group('Exercise 25')
console.log(
  sortByLastName([
    { name: 'Harry Potter', rating: '8+', author: 'Joanne Rowling' },
    { name: 'Warcross', rating: '13+', author: 'Marie Lu' },
    { name: 'The Hunger Games', rating: '12+', author: 'Suzanne Collins' },
  ])
)
console.groupEnd()

/**
 * sorts the objects by lastName
 */
console.group('Exercise 25 - With better data structure')
console.log(
  sortByLastNameSmart([
    {
      name: 'Harry Potter',
      rating: '8+',
      author: { firstName: 'Julia', lastName: 'Rowling' },
    },
    {
      name: 'Warcross',
      rating: '13+',
      author: {
        firstName: 'Marie',
        lastName: 'Lu',
      },
    },
    {
      name: 'The Hunger Games',
      rating: '12+',
      author: { firstName: 'Suzanne', lastName: 'Collins' },
    },
  ])
)
console.groupEnd()
