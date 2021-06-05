const _ = require('lodash')

const user = {
  name: 'John',
  age: 18,
  permissions: {
    create: true,
    update: false,
    delete: false
  }
}

// const copyUser = user
const lodashCopyUser = _.cloneDeep(user)

// copyUser.age = 19
lodashCopyUser.age = 19

console.log(user)
// console.log(copyUser)
console.log(lodashCopyUser)
