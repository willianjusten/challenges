/**
 * Question: How would you reverse words in a sentence?
 */

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("are you mad bro?"));