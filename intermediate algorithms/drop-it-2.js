function dropElements(arr, func) {
  // keep iterating while result is false
  let i = 0;
  let result = false;
  let k = arr.length;
  while (!result && i < k) {
    result = func(arr[0]);
    console.log(result)
    if (!result) {
      arr.shift();
      i++;
    }
  }
  console.log(i);
  console.log(arr);
  /*
  if (i == k) {
    arr = [];
  }
  */
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });