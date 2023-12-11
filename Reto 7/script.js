function drawGift (size, symbol) {
  // Code here
  const height = size + 3
  let res = ''
  for (let i = 0; i < height; i++) {
    let emptysBlock = ''.repeat(3)
    emptysBlock += '#'.repeat(size)
    emptysBlock += '\n'
    res += emptysBlock
  }

  return res
}

module.exports = { drawGift }
