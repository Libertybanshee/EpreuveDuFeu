const nMarche = process.argv[2];

function MakerMarche (x) {
    i = 0;
    while (i < x) {
        space = x - i;
        diese = i + 1;
        Calcul = " ".repeat(space) + "#".repeat(diese);
        console.log(Calcul);
        i++;
    }
}

MakerMarche (nMarche);