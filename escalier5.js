const Arg = process.argv[2];

for (i=1 ;i < Arg ;i++){
    Space = Arg - i;
    Diese = i;
    MarcheMaker = " ".repeat(Space) + "#".repeat(Diese);
    console.log(MarcheMaker);
}