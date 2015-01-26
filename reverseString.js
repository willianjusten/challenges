/**
 * Question: How would you reverse a string in JavaScript?
 */

function reverse(str) {
    var revString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

console.log(reverse("test a thing"));