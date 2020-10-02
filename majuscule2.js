const arg = process.argv[2];
var lettre = arg.split('');
let write = "";
let j = 0;

for (i = 0; i < arg.length; i++){
    if (lettre[i] != " "){
        j += 1;
        if (j % 2 == 0){
            write += lettre[i].toLowerCase();
        }
        else {
            write += lettre[i].toUpperCase();
        }
    }
    else {
        write += " ";
    }
}

console.log(write);