/*
Array is a data structure
 and a special kind of object
 and an ordered collection of data
*/

let arr = new Array();
let arrr = [];

let fruits = ["apple", "orange", "banana"];

console.log(fruits[2]); // banana

fruits[2] = "pear"; // ["apple", "orange", "pear"];
fruits[3] = "lemon"; // ["apple", "orange", "pear", "lemon"]

fruits.length; // 4


//An array can store elements of any type.
let elementsInArray = ["banana",
2,
{name:"rakesh"},
function sum(a, b) {
  return a+b;
},
];


// Methods pop/push, shift/unshift
// push adds an element to the end of an array and pop removes interval
// shift gets an element from the beggining, and shifts each element to
// thier left and unshift adds an element to the beggining of an array
// and shifts each element to thier right,thereby increasing thier index value

let car = ["audi", "bmw", "toyota"];
console.log(car.pop()); // toyota, ["audi", "bmw"]
console.log(car.push("ferrari")); // ["audi", "bmw", "ferrari"]
console.log(car.shift()); // audi, ["bmw", "ferrari"]
console.log(car.unshift("volkswagen")); // ["volkswagen", "bmw", "ferrari"]

// Array is copied by reference, just like an object, because it is an object
let vehicle = car;
if(vehicle === car) console.log("indeed");
vehicle.push("tata"); // ["volkswagen", "bmw", "ferrari", "tata"]

// If an object used as an array, the engine recognises it and applies certain
// optimization techniques, unless treated as object again
// Methods push/pop run fast, while shift/unshift are slow.

// With loops

for (var i = 0; i < car.length; i++) {
  console.log(car[i]);
}

for (var c of car) {
  console.log(c);
}

// ** length **
// is actually not the count of values in the array, but the greatest numeric index plus one.

let dogs = [];
dogs[100] = "bulldog";
console.log(dogs.length); // 101

// length is writable, but...
let numbers = [1,2,3,4,5];
numbers.length = 100; // [1,2,3,4,5]
numbers.length = 2; //[1,2], the rest of the elements are lost
numbers.length = 0; // can be one way to clear an array


//** Multidimensional arrays

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

console.log(matrix[1][1]);

// don’t use the == operator. Instead, compare them item-by-item in a loop
// or using iteration methods explained in the next chapter.
