/**
 * Funtion organize gifts
 * @param {string} gifts
 * @returns string
 */

function organizeGifts (gifts) {
  // Code here
  let string = ''
  const lettersFromGift = extractNumbersAndLetters(gifts)
  lettersFromGift.letters.forEach((letter, index) => {
    const number = lettersFromGift.numbers[index]
    string += reduceGifts(letter, number)
  })
  function extractNumbersAndLetters (str) {
    const numbers = str.match(/\d+/g).map(Number)
    const letters = str.match(/[a-zA-Z]+/g)
    return { numbers, letters }
  }
  function reduceGifts (letter, giftsNumber, res = '') {
    while (giftsNumber !== 0) {
      if (giftsNumber >= 50) {
        res += `[${letter}]`
        giftsNumber -= 50
      } else if (giftsNumber >= 10) {
        giftsNumber -= 10
        res += `{${letter}}`
      } else if (giftsNumber > 1) {
        giftsNumber -= 1
        if (res.includes('(')) {
          res += letter
        } else {
          res += `(${letter}`
        }
      } else if (giftsNumber === 1) {
        giftsNumber -= 1
        if (!res.includes('(')) {
          res += `(${letter})`
        } else if (!res.includes(')')) {
          res += `${letter})`
        } else {
          res += `${letter}`
        }
      }
    }
    return res
  }
  //

  return string
}

module.exports = { organizeGifts }
