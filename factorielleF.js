var Arg = process.argv[2];

function fact(nb, n) {

  if (n == 0) {
    return 1;
  } else {
    return fact(nb, n - 1) * (n);
  }
};
  
console.log(fact(Arg,Arg));