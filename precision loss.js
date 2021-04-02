//Why 6.35.toFixed(1) == 6.3?

//For instance
//1.35.toFixed(1) gives 1.4
//6.35.toFixed(1) gives 6.3

// ** Reason **:  Internally the decimal fraction 6.35 is an endless binary. As always in such cases, it is stored with a precision loss.
//alert( 1.35.toFixed(20) ); // 1.35000000000000008882
//alert( 6.35.toFixed(20) ); // 6.34999999999999964473
//notice the precision loss of 0.01 in later case


// ** Solution **:

console.log((6.35*10).toFixed(20)); // 63.50000000000000000000
console.log(Math.round(6.35 * 10)/10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
