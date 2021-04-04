// https://www.youtube.com/watch?v=kekmCQXYwQ0


// Brute force approach

function getMaxSubSum(arr) {
  let maxSum = 0;
  for (var i = 0; i < arr.length; i++) {
    let subFixedStart = 0;
    for (var j = i; j < arr.length; j++) {
      subFixedStart += arr[j];
      maxSum = Math.max(maxSum, subFixedStart);
    }
  }
  return maxSum;
}

let a = [-1, 2, 3, -9, 11];
getMaxSubSum(a);


// The solution has a time complexity of O(n2). In other words,
// if we increase the array size 2 times, the algorithm will work 4 times longer.

function getMaxSumInSub(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (var item of arr) {

      console.log("maxSum: " + maxSum);
      console.log("partialSum: " + partialSum);
      console.log("before");

      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);

      if(partialSum < 0)
        partialSum = 0;

      console.log("maxSum: " + maxSum);
      console.log("partialSum: " + partialSum);
      console.log("after");
    }

    return maxSum;
}

getMaxSumInSub(a);

//The algorithm requires exactly 1 array pass, so the time complexity is O(n).
