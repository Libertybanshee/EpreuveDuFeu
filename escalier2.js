const nb = process.argv[2];

function scale(x) {
    i = 0;
    while (i < x) {
        space = x - i;
        diese = i + 1;
        marcheT = " ".repeat(space) + "#".repeat(diese);
        console.log(marcheT);
        i++;
    }
};

scale(nb);