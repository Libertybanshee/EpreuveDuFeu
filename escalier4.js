const Arg = process.argv[2];

for (i=0; i < Arg; i++) {

    MarcheMaker = " ".repeat(Arg - i) + "#".repeat(i + 1);
    console.log(MarcheMaker);
}