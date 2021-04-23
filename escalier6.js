const Nb = process.argv[2];
var Diese = "#";
var Marche = "";

for (let i = 0; i < Nb; i++){
        Marche = Diese
        
    do {
        if (Diese.length == Nb) {
            Diese = Diese
        } else {
        Diese = " " + Diese
        }
    } while ( Diese.length  < Nb );

console.log (Diese);
Diese = Marche + "#"
}