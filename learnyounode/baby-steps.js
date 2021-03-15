const args = process.argv.slice(2);
let sum = 0;
for (let i = 0; i < args.length; i += 1) {
  sum += parseInt(args[i]);
}
console.log(sum);
