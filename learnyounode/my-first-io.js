const fs = require('fs');

const [, , filepath] = process.argv;
const file = fs.readFileSync(filepath).toString();
const numLines = file.split('\n').length - 1;
console.log(numLines);
