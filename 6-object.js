const _ = require('lodash')

const users = {
  john: { age: 22, active: true },
  joe: { age: 23, active: true },
  jane: { age: 21, active: false }
}

console.log('findKey():', _.findKey(users, { age: 23 }))
console.log('mapKeys():', _.mapKeys(users, (value, key) => key.toUpperCase()))
console.log('mapValues():', _.mapValues(users, (value, key) => {
  value.age += 1
  return value
}))

console.log('---------------')

console.log(users.joe.age)
console.log(_.get(users, 'joe.age'))

console.log(users.james?.age)
console.log(_.get(users, 'james.age'))
console.log(_.get(users, 'james.age', 'not_found'))

console.log('---------------')

const abc = { a: 1, b: 2, c: 3 }

console.log('invert():', _.invert(abc))
console.log('pick():', _.pick(abc, 'c'))
console.log('omit():', _.omit(abc, 'c'))
