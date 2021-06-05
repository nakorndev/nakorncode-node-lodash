const _ = require('lodash')

console.log("upperCase('Foo Bar'):", _.upperCase('Foo Bar'))
console.log("lowerCase('Foo Bar'):", _.lowerCase('Foo Bar'))
console.log("camelCase('Foo Bar'):", _.camelCase('Foo Bar'))
console.log("snakeCase('Foo Bar'):", _.snakeCase('Foo Bar'))
console.log("kebabCase('Foo Bar'):", _.kebabCase('Foo Bar'))
console.log("capitalize('Foo Bar'):", _.capitalize('Foo Bar'))

const message = 'Consectetur dolor ex dolore aliqua ea duis fugiat. Laboris deserunt ea eiusmod non magna qui qui anim. Esse voluptate mollit sunt et ea. Excepteur enim velit eiusmod dolore et aute labore est sunt aute eu sint. Enim reprehenderit incididunt quis duis irure reprehenderit.'
console.log(_.truncate(message, { length: 50 }))
