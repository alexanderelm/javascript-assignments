/**
 * The person object structure
 */
interface Person {
  name: string
  age: number
  budget: number
}

/**
 * Function that takes an object with name, age and budget and sums up the budget of all the objects
 * @param personInfo - The input containing name, age and budget
 * @returns The budget of the input Person objects summed up
 */
export const sumBudgets = (personInfo: Person[]): number =>
  personInfo.reduce((acc: number, current: Person) => {
    return acc + current.budget
  }, 0)
