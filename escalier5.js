function num(myArgs) {

    var myArgs = process.argv.slice(2);
    console.log('myArgs: ', myArgs);
    
    
    for(var i = 1; i <= myArgs; i++) {
      console.log(" ".repeat(myArgs-i) + "#".repeat(i));
      }
    }
    console.log(num());