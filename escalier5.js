const Arg = process.argv[2];

for(i=0; i < Arg; i++){
    Diese = i + 1;
    Space = Arg - i;
    MarcheMaker = " ".repeat(Space) + "#".repeat(Diese);
    console.log(MarcheMaker);
};