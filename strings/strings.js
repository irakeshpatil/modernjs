let singleQuoted = 'single-quoted';
let doubleQuoted = "double-quoted";
let backticks = `back-ticks`;

// backticks can be used to embed js expression into a string, with ${...}
// Example:
function sum(a,b){ return a+b;}
let sum = `sum of 1 and 2 is ${sum(1,2)}`; // 3

//another advantage of backtics is to show list

let colorOfShoes = `red
black
blue
orange`;

//unlike backticks list can't be show using single or double quotes

/*
let colorOfShoes = "red
black
blue
orange";

let colorOfShoes = 'red
black
blue
orange';
*/

//This results into error
// Error: Unexpected token ILLEGAL

// use \n instead, \n means new line in a contibuous string

alert( 'I\'m the Walrus!' ); // escape character needed
alert( `I'm the Walrus!` ); // escape character not needed

// _________________________________________________________________ //

// ** String length ** //
// length is a property not a function, need not use () to call

let color = 'purple';
let length = color.length;
console.log(length);

// _________________________________________________________________ //

// ** Accessing characters **//
let car = "volkswagen"; // 0=>v, 1=>o, 2=>l.....9=>n
console.log(car[3]); // k
console.log(car[1000]); // undefined
console.log(charAt(3)); // k
console.log(charAt(1000)); // returns an empty string

//accessing all the characters

for(let char of car){
  console.log(char);
}

// _________________________________________________________________ //

// ** Strings are immutable ** //
let name = "karen";
name[0] = "c"; // nothing happens

// Instead create a new variable and create new String

let anotherName = "c" + name[1] + name[2] + name[3] + name[4];
console.log(anotherName);

// _________________________________________________________________ //

// ** Changing the case ** //

let medium = "English";
console.log(medium.toLowerCase());
console.log(medium.toUpperCase());
console.log(medium[3].toUpperCase()); // changing single character

// Note: this doesn't change the variable medium, that remains same, the changed
// value can be assigned to another variable

// _________________________________________________________________ //

// ** Searching for a substring ** //

// str.indexOf(str, pos)

let proverb = "A chain is only as strong as its weakest link.";
console.log(proverb.indexOf("in")); // 5
console.log(proverb.indexOf("out")); // -1
console.log(proverb.indexOf("a")); // 4
console.log(proverb.indexOf("A")); // 0

// The str.indexOf finds exact match, see the difference for A and a

// The optional pos parameter lets us find the string starting from mentioned
// position

console.log(proverb.indexOf("in")); // 5
console.log(proverb.indexOf("in", 6)); // 42, notice we didn't start from 5

// If we’re interested in all occurrences, we can run indexOf in a loop.
// Every new call is made with the position after the previous match:

let anotherProverb = 'As sly as a fox, as strong as an ox';
let targetString = 'as'
let pos = 0;

while (true) {
  let nextPos = anotherProverb.indexOf(targetString,pos);
  if (nextPos == -1) break;

  console.log("next pos is at " + nextPos);
  pos = nextPos+1;
}

// The same algorithm can be shortened

let strA = "As sly as a fox, as strong as an ox";
let targetA = "as";

let posA = -1;
while ((posA = strA.indexOf(targetA, posA + 1)) != -1) {
  console.log(posA);
}

// There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.
// It would list the occurrences in the reverse order.

// There is a slight inconvinience using if condition
let strB = "Widget with id";

if (strB.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}

// so better to compare with -1

let strC = "Widget with id";

if (strC.indexOf("Widget") != -1) {
    alert("We found it"); // doesn't work!
}


// str.includes(substr, pos),
// str.startsWith
// str.endsWith
// These return boolean, not position

console.log("Widget with id".includes("Widget")); // true
console.log("Hello and welcome!".includes("bye")); // false
console.log("Widget".startsWith("Wid")); // true
console.log("Widget".endsWith("get")); //true

// _________________________________________________________________ //

// ** Getting a substring ** //

//There are 3 methods in JavaScript to get a substring: substring, substr and slice.


let str = "stringify";
console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
console.log( str.slice(2) ); // 'ringify', from the 2nd position till the end
// start at the 4th position from the right, end at the 1st from the right
console.log( str.slice(-4, -1) ); // 'gif'

// these are same for substring
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( str.slice(2, 6) ); // "ring" (the same)
console.log( str.slice(6, 2) ); // "" (an empty string)
console.log( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
console.log( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
