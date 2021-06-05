const _ = require('lodash')

console.log('chunk():', _.chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2))

console.log('compact():', _.compact(['string', 123, true, '', null, undefined, 0]))

console.log('difference():', _.difference(['a', 'b', 'c'], ['a', 'b', 'd']))
console.log('intersection():', _.intersection(['a', 'b', 'c'], ['a', 'b', 'd']))
console.log('union():', _.union(['a', 'b', 'c'], ['a', 'b', 'd']))
console.log('uniq():', _.uniq([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]))

console.log('drop():', _.drop(['a', 'b', 'c', 'd'], 2))
console.log('dropRight():', _.dropRight(['a', 'b', 'c', 'd'], 2))

const users = [
  { id: 1, name: 'John', active: true },
  { id: 2, name: 'Joe', active: false },
  { id: 3, name: 'Jane', active: true },
]

console.log('users.indexOf():', users.indexOf({ name: 'Jane' }))
console.log('_.indexOf(users):', _.indexOf(users, { name: 'Jane' }))
console.log('_.findIndex(users):', _.findIndex(users, { name: 'Jane' }))
