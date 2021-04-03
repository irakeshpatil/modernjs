//write a function to Uppercase the first character


function ucFirst(str){
  if(!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("game of thrones");
