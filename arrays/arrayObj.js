let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function () { alert(this)}


// So we have a call of the function arr[2] as an object method. 
// Naturally, it receives this referencing the object arr and outputs the array:
