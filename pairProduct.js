/**
 Write to the standard output the greatest product of 2 numbers to be divisible by 3 from a given array of pozitive integers.
Example input:
6, 8, 8, 7, 2, 5
Example output:
48
 */

function max_prod(v) {
    var product = 0;
    var tam = v.length;

    for (i=0; i < tam; i++){
        for(j=0; j < tam; j++){
            new_product = v[i] * v[j];
            if(new_product % 3 === 0 && new_product >= product && i != j)
                product = new_product;
        }
    }
    console.log(product);
}

max_prod([48,8,8,7,2,5]);
max_prod([3,5,8,1,48]);