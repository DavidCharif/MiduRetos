const { drawGift } = require('./script')

test('Funtions must work', () => {
  expect(drawGift(4, '+')).toBe(`   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`)
  expect(drawGift(2, '&')).toBe(` ##
  ###
  ##
  `)
})
