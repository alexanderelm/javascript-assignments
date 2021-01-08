/**
 * defining a new type
 */
interface Drink {
  name: string
  price: number
}

/**
 * test array of drinks
 */
export const testDrinks: Drink[] = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 100 },
  { name: 'cola', price: 22 },
  { name: 'lemon', price: 12 },
  { name: 'sprite', price: 52 },
  { name: 'squash', price: 10 },
]

/**
 * Function that receives an array and sorts it by price low to high, either by getting an array variable or getting specified an array in the Drink[] type format
 * @param drinkArray - Receives an array in the Drink[] type format
 * @returns The input array sorted by price, low to high
 */
export const sortDrinkByPrice = (drinkArray: Drink[]) => {
  return drinkArray.sort((a, b) => a.price - b.price)
}
