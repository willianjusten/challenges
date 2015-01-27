// recebe uma string
// imprime a letra e a quantidade de vezes que aparece na palavra

function countLetter(str){
    var count = {};
    for (var i=0; i<str.length;i++){
        var character = str.charAt(i);
        if(count[character]){
            count[character]++;
        }
        else {
            count[character] = 1
        }
    }
    return count;
}

console.log(countLetter('banana'));
