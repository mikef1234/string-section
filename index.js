function stringIncludes(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, (i + needle.length)) === needle) {
      return true
    }
  }

  return false
}

function countLetter(haystack, needle) {
  // let arr = haystack.split('')
  let count = 0
  let i = 0

  while (i <= haystack.length) {
    if (haystack[i] === needle) {
      count++
    }
    i++
  }

  return count
}

function camelCase(sentence) {
  const arr = sentence.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase()

    const letters = arr[i].split('')

    if (i > 0) {
      letters[0] = letters[0].toUpperCase()
    }
    arr[i] = letters.join('')
  }

  return arr.join('')
}

module.exports = {
  stringIncludes,
  countLetter,
  camelCase,
}
