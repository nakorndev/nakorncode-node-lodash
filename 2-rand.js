const { random } = require('lodash')

console.log(random(1, 6))
console.log(String(random(999999)).padStart(6, '0'))
