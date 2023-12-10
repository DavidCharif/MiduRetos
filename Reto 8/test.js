/* eslint-disable no-undef */
const { organizeGifts } = require('./script')

test('Testing with 9c', () => {
  const answer1 = organizeGifts('9c')
  expect(answer1).toBe('(ccccccccc)')
})

test('Testing with 9a2b', () => {
  const answer2 = organizeGifts('9a2b')
  expect(answer2).toBe('(aaaaaaaaa)(bb)')
})
