const nMarche = process.argv[2];

function Escalier(x) {
    i = 0;
    while (i < x) {
        space = x - i;
        diese = i + 1;
        construction = " ".repeat(space) + "#".repeat(diese);
        console.log(construction);
        i++;
    }
}

Escalier(nMarche);