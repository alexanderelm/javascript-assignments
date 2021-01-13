interface Book {
  name: string
  rating: string
  firstName: string
  lastName: string
}

export const sortByLastNameSmart = (books: Book[]): Book[] => {
  return books.sort((a, b) => {
    return a.lastName.localeCompare(b.lastName)
  })
}
