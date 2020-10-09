const Arg = process.argv[2];

for (i = 0; i < Arg; i++) {
    space = Arg - i;
    diese = i + 1;
    calcule = " ".repeat(space) + "#".repeat(diese);
    console.log(calcule);
}
