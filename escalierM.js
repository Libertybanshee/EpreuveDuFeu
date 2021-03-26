const Arg = process.argv[2];

for(i=0; i < Arg; i++){
    diese = i + 1;
    space = Arg - i;
    MarcheMaker = " ".repeat(space) + "#".repeat(diese);
    console.log(MarcheMaker);
}