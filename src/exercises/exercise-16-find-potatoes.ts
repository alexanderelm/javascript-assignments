/**
 * Function that checks a string (phrase) and find how many times 'potato' is written within it
 * @param phrase - The input getting checked for amount of times 'potato' is mentioned
 * @returns amount of times 'potato is written in (phrase)
 */
export const findPotatoes = (phrase: string): number => {
  const regex = /potato/gi

  // Find matches by regex
  const matches = phrase.match(regex)?.length

  // If matches is falsy matches will set to 0
  return matches ? matches : 0
}
