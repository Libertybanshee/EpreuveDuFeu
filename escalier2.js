const nMarche = process.argv[2];

function MakerMarche (x) {
    for (i = 0; i < x; i++) {
        space = x - i;
        diese = i + 1;
        Calcul = " ".repeat(space) + "#".repeat(diese);
        console.log(Calcul);
    }
}

MakerMarche (nMarche);