const Arg = process.argv[2];

for (i=0; i < Arg; i++) {
    Diese = 1 + i;
    Space = Arg - i;
    MarcheMaker = " ".repeat(Space) + "#".repeat(Diese);
    console.log(MarcheMaker);
}