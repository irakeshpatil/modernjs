// A function to generate random number between given min and max (max not included)

function randomNumber(min, max){
  return min + Math.random() * (max-min);
}

console.log(randomNumber(1,5));
console.log(randomNumber(1,50));
console.log(randomNumber(1,45));
