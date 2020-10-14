const Arg = process.argv[2];

for (i=0; i < Arg; i++) {
    marcheMaker = " ".repeat(Arg - i) + "#".repeat(1 + i);
    console.log(marcheMaker);
}