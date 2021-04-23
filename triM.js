const Arg = process.argv.slice(2);

Arg.sort(function (a, b){
  return b - a;
})

console.log(Arg.join(" "));