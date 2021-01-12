interface Order {
  [key: string]: number
}

/**
 * Function that receives object a set of key:value items pairs then filters out any items with a value less than the cost
 * @param orders - The object input
 * @param cost - The cost input to be used in the filter
 * @returns All items with a value of more than the cost
 */
export const expensiveOrders = (orders: Order, cost: number): Order => {
  const filteredObjects = Object.entries(orders).filter(([, price]) => {
    return price > cost
  })

  return Object.fromEntries(filteredObjects)
}
