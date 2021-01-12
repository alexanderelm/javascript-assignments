interface Order {
  [key: string]: number
}

export const expensiveOrders = (orders: Order, cost: number) => {
  const filteredOrders = Object.entries(orders).filter((order) => {
    const [, value] = order

    return value > cost
  })

  const objects = filteredOrders.map(([title, value]) => {
    return { [title]: value }
  })

  return Object.fromEntries([objects])
}
