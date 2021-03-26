const Arg = process.argv[2];

for (i=0; i < Arg; i++) {
    space = Arg - i;
    diese = 1 + i;
    MarcheMaker = " ".repeat(space) + "#".repeat(diese);
    console.log(MarcheMaker);
}
