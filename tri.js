function tri(myArg) {

    console.log(myArg);
    
    myArg.sort(function(a, b){return b - a});
    myArg = myArg.join(" ");
    
    console.log(myArg);
    
    };
      var myArg = process.argv.slice(2);
     tri(myArg) ;