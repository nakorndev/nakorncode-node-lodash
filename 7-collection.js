const _ = require('lodash')

const listName = [
  'james',
  'john', 'jane', 'jose',
  'joe', 'jae'
]

console.log('countBy():', _.countBy(listName, (value, key) => value.length))
console.log('countBy():', _.countBy([1.1, 2.2, 2.7, 3.2, 3.5, 1.2, 1.9], Math.trunc))

console.log('groupBy():', _.groupBy(listName, (value, key) => value.length))

const users = [
  { name: 'john', age: 21 },
  { name: 'joe', age: 17 },
  { name: 'jane', age: 22 }
]

console.log('every():', _.every(users, (value, key) => value.age >= 18))
console.log('some():', _.some(users, (value, key) => value.age >= 18))
console.log('filter():', _.filter(users, (value, key) => value.age >= 18))
console.log('find():', _.find(users, (value, key) => value.age >= 18))
console.log('find():', _.find(users, { age: 22 }))

console.log('orderBy():', _.orderBy(users, ['age'], 'asc'))
console.log('orderBy():', _.orderBy(users, ['age'], 'desc'))

console.log('---------------')

console.log('apple is banana'.includes('is'))
console.log(_.includes('apple is banana', 'is'))
console.log(_.includes([1, 2, 3, 4, 5], 4))
console.log(_.includes({ a: 1, b: 2, c: 3 }, 3))

console.log('---------------')

console.log(_.sample(listName))
console.log(_.sampleSize(listName, 2))
console.log(_.shuffle(listName))
