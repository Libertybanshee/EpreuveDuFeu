const Arg = process.argv[2];

function marcheMaker(x) {
    for (i = 0; i < x; i++ ){
        space = x - i;
        diese = i + 1;
        calcule = " ".repeat(space) + "#".repeat(diese);
        console.log(calcule);
    }
}

marcheMaker(Arg);