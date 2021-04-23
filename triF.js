var Tri = process.argv.slice(2);
  
Tri.sort(function (a, b){
  return b - a
  })

console.log(Tri.join(" "));
