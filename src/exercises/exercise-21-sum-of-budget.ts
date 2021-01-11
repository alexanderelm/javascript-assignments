/**
 * The person object structure
 */
interface person {
  name: string
  age: number
  budget: number
}

/**
 * Function that takes an object with name, age and budget and sums up the budget of all the objects
 * @param personInfo - The input containing name, age and budget
 * @returns The budget of the input person objects summed up
 */
export const sumBudgets = (personInfo: person[]): number =>
  personInfo.reduce((acc: number, current: person) => {
    return acc + current.budget
  }, 0)
