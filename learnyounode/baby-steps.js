args = process.argv.slice(2)
sum = 0
for (var i = 0; i < args.length; i++) {
  sum += parseInt(args[i])
}
console.log(sum)
