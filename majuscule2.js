const Arg = process.argv[2];
var Lettre = Arg.split('');
let res = "";
let j = 0;

for (i=0; i < Lettre.length; i++) {
    if (Lettre[i] != " "){  
        j++;
        if (j % 2 == 0) {
            res += Lettre[i].toLowerCase();
            }
        else {
            res += Lettre[i].toUpperCase();
            }
        }
    else { 
        res += " ";
    }
}

console.log(res);