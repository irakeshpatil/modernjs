// A function to generate random number between given min and max (max included)

function randomNumber(min, max){
  return min + Math.random() * (max+1-min);
}

console.log(randomNumber(1,5));
console.log(randomNumber(1,50));
console.log(randomNumber(1,45));
