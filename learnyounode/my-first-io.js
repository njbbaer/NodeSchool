const fs = require('fs')

filepath = process.argv[2]
let file = fs.readFileSync(filepath).toString()
let numLines = file.split('\n').length - 1
console.log(numLines)