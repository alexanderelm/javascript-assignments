type Author = {
  firstName: string
  lastName: string
}

interface Book {
  name: string
  rating: string
  author: Author
}

export const sortByLastNameSmart = (books: Book[]): Book[] => {
  return books.sort((a, b) => {
    return a.author.lastName.localeCompare(b.author.lastName)
  })
}
