/**
 * The structure of the input objects
 */
type Cart = {
  [key: string]: number
}

/**
 * Function that takes in items with a name and a price, then sums the price and checks if its above the threshold const and returns a boolean
 * @param cart - An object with a key (string) and a price (number)
 * @returns A boolean dictated by weather or not the cartSum is above the threshold for free shipping
 */
export const freeShipping = (cart: Cart): boolean => {
  const cartSum = Object.entries(cart).reduce((acc, [, price]) => {
    return acc + price
  }, 0)

  const threshold = 50

  return cartSum > threshold
}
