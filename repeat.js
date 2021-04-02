//Repeat until the input is a number
// return null if reading canceled [ESC] or user enters empty line


function readNumber(){
  let num;

  do{
    num = prompt("Enter value",'');
  }while(!isFinite(num));

  if(num === "" || num === null) return null;

  return +num;
}

console.log(readNumber());
