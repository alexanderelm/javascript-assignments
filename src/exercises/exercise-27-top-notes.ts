interface Student {
  id: number
  name: string
  notes: number[]
}

/**
 * Function that takes a Student array and loops through it for note items, then loop through each notes array fot the highest value
 * @param students - An array of student objects
 * @returns An array of the max value of each students notes
 */
export const getTopNotes = (students: Student[]) => {
  return students.map(({ notes }) => Math.max(...notes))
}
