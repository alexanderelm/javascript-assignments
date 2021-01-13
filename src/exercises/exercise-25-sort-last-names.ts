interface Book {
  name: string
  rating: string
  author: string
}

/**
 * Function that takes and array of books and sorts them by the author last name, by splitting the author on space and sorting on the second value
 * @param books - The input objects containing name, rating and author
 * @returns The input objects sorted by the second name of author
 */
export const sortByLastName = (books: Book[]): Book[] => {
  const getAuthorLastName = (author: Book['author']) => author.split(' ')[1]

  return books.sort((a, b) => {
    return getAuthorLastName(a.author).localeCompare(
      getAuthorLastName(b.author)
    )
  })
}
