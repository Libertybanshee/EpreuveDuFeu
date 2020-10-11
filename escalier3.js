const Arg = process.argv[2];

for (i=0; i < Arg ;i++) {
    space = Arg - i;
    diese = i + 1;
    scaleMaker = " ".repeat(space) + "#".repeat(diese);
    console.log(scaleMaker);
}
