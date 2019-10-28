// Determine if a word or a phrase is a palindrome
// 'eye'  -> true
// 'nope' -> false

// Recursive
const isPalindromeRecursive = function(str) {
  // Prepare the string
  str = str.split(' ').join('')
  return isPalindromeRecur(str)
}

const isPalindromeRecur = function(str) {
  if (str.length == 1 || str.length == 0) {
    return true
  }
  if (str[0] === str[str.length - 1]){
    return isPalindromeRecur(str.slice(1, str.length - 1))
  }
  return false
}

// Loop
const isPalindromeLoop = function(str) {
  str = str.split(' ').join('')
  let strLen = str.length - 1
  for(let i = 0; i < strLen/2; i ++ ){
    if (!(str[i] === str[strLen - i])) {
      return false
    }
  }
  return true
}

console.log(isPalindromeRecursive('ii'))
console.log(isPalindromeRecursive('eye'))
console.log(isPalindromeRecursive('hello'))
console.log(isPalindromeRecursive('slightly more involved evlo vnieromy lthgils'))

console.log(isPalindromeLoop('ii'))
console.log(isPalindromeLoop('eye'))
console.log(isPalindromeLoop('hello'))
console.log(isPalindromeLoop('slightly more involved evlo vnieromy lthgils'))