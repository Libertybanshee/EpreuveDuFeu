const Arg = process.argv[2];
var Lettre = Arg.split('');
var Print = "";
var j = 0;

if (i = 0, i < Arg.lenght, i++){
    j++
    if (Lettre[i] != " "){
        if (j % 2 == 0){
            Print += Lettre[i].toUpperCase();
        } else {
            Print += Lettre[i].toLowerCase();
        }
    } else {
        Print += " ";
    }
}

console.log(Arg);
