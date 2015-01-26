/**
 * Question: How would you reverse a string in JavaScript?
 */

function reverse(str) {
    if (str === "")
        return ""
    else
        return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("are you mad bro?"));