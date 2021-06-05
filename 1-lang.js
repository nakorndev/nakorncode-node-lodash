const _ = require('lodash')

console.log('isBuffer:', _.isBuffer(Buffer.from('foobar')))
console.log('isDate:', _.isDate(new Date()))
console.log('isError:', _.isError(new Error('hello error')))
console.log('isFunction:', _.isFunction(() => {}))

console.log('isEmpty(null):', _.isEmpty(null))
console.log('isEmpty(undefined):', _.isEmpty(undefined))
console.log('isEmpty(0):', _.isEmpty(0))
console.log('isEmpty(\'\'):', _.isEmpty(''))
console.log('isEmpty({}):', _.isEmpty({})) // จะมีประโยชน์
console.log('isEmpty([]):', _.isEmpty([])) // จะมีประโยชน์

console.log('isEqual(1, 1):', _.isEqual(1, 1)) // 1 == 1
console.log("isEqual(['a', 'b'], ['a', 'b']):", _.isEqual(['a', 'b'], ['a', 'b']))
