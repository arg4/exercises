// Binary to Decimal conversion
// '101'  -> 5
// '1010' -> 10
const binaryToDecimal = function(str) {
  let number = 0
  for(let i = 0; i < str.length; i ++) {
    if (str[i] === '1'){
      number += Math.pow(2, (str.length - 1) - i)
    }
  }
  return number
}

console.log(binaryToDecimal('101'))
console.log(binaryToDecimal('1010'))
console.log(binaryToDecimal('10101001'))