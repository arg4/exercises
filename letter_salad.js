const { PerformanceObserver, performance } = require('perf_hooks');
// Group letters together
// 'hello' -> 'ehllo'

// Quick Implementation
const groupLettersQuick = function(str) {
  return str.split('').sort().join('').trim()
}

// Constant Time - only works for letters a-z
const groupLettersConstTime = function(str) {
  // Break word up into a dictionary
  let letters = {}
  for(let letter of str) {
    if (letters[letter]) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
  }
  // Create alphabet
  let alphabet = []
  for(let i = 0; i < 128; i ++){
    alphabet.push(String.fromCharCode(i))
  }
  // Generate the new 'word'
  let word = ''
  for(let char of alphabet){
    if(letters[char]) {
      word += char.repeat(letters[char])
    }
  }
  return word
}

// Respects emojis, other weird characters
const groupSymbols = function(str) {
  let codePoints = Array.from(str) // This respects codepoints
  let newArr = []
  for (let codePoint of codePoints) {
    if (newArr.length == 0) {
      newArr.push(codePoint)
    } else {
      let currentCP = codePoint.codePointAt(0)
      for(let i = 0; i < newArr.length; i ++) {
        let indexCP = newArr[i].codePointAt(0)
        if (currentCP <= indexCP && newArr[i - 1] === undefined) {
          // if codePoint < than current and i - 1 == undefined
          newArr.unshift(codePoint)
          break
        } else if (currentCP >= indexCP && newArr[i + 1] === undefined) {
          // if codePoint > than current and i + 1 == undefined
          newArr.push(codePoint)
          break
        } else if (currentCP <= indexCP && currentCP >= newArr[i - 1].codePointAt(0)){
          // if codePoint < current && codePoint > i - 1 
          newArr.splice(i, 0, codePoint)
          break
        }
      }
    }
  }
  return(newArr.join(''))
}

// Array of test phrases
const testPhrases = [
  'hello',
  'hello friend',
  'this is a much longer sentence it should take a little bit longer to run',
  'this is a much longer sentence it should take a little bit longer to run this one is even longer'
]

// Performance logging function
const logPerformance = function(func, strArray) {
  for (phrase of strArray) {
    let t1 = performance.now()
    let result = func(phrase)
    let t2 = performance.now()
    console.log(`${phrase}, => ${result}`)
    console.log(`Evaluated in ${t2 - t1}`)
    console.log('\n')
  }
  console.log('\n\n')
}

console.log('groupLettersQuick()')
logPerformance(groupLettersQuick, testPhrases)

console.log('groupLettersConstTime()')
logPerformance(groupLettersConstTime, testPhrases)

console.log('groupSymbols()')
logPerformance(groupSymbols, testPhrases)