/**
 Given an array containing all numbers from 1 to N with the exception of one print the missing number to the standard output.
Example input:
array: 5 4 1 2
Example output:
3
 */


function find_missing_number(v) {
    var tam = v.length;
    var i;

    for (i = 1; i <= tam; i++) {
        // verifica se não existe dentro do array
        if(v.indexOf(i) === -1)
            console.log(i);
    };
};

find_missing_number([5,4,1,2]);
find_missing_number([5, 2, 6, 1, 3]);