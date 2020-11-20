const Arg = process.argv[2];

for (i=0; i < Arg; i++){
    Space = Arg - i;
    Diese = i + 1;
    MarcheMaker = " ".repeat(Space) + "#".repeat(Diese); 
    console.log(MarcheMaker);
}