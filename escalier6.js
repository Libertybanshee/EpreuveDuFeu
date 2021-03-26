var test = "#", temp = "empty", esca = process.argv[2]
for (let CPT = 0; CPT < esca; CPT++){
        temp = test
        
    do {
        if (test.length == esca) {
            test = test
        } else {
        test = " " + test
        }
    } while ( test.length  < esca );
    console.log (test);
    test = temp + "#"
}