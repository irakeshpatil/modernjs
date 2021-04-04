function sumInput() {
  let userdata = [];
  let sum = 0;

  while (true) {
    let value = +prompt("enter number",'');

    // if(value != null && value != '' && isFinite(value)){
    //   userdata.push(value);
    // }else{
    //   break;
    // }

    if(value === null || value === '' || !isFinite(value)){
      break;
    }else{
      userdata.push(value);
    }

  }

  for (var v of userdata) {
    sum += v;
  }

  return sum;
}

sumInput();
