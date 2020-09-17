const arg = process.argv[2];

function scale(x) {
    let i = 0;
        while (i < x) {
            space = x - i;
            diese = i + 1;
            draw = " ".repeat(space) + "#".repeat(diese);
            console.log(draw);
            i++;  
        }
}

scale(arg);