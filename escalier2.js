const arg = process.argv[2]; 
/* fonctionne aussi en désignais 
const [nd, file, nb] = process.argv;
*/ 

function scale(x) {
    let i = 0; 
        while (i < x) {
        space = x - i;
        diese = i + 1;
        scale = " ".repeat(space) + "#".repeat(diese);
        console.log(scale);
        i++;
    }
}

scale(arg);