function frankenSplice(arr1, arr2, n) {
  //arr.splice(index, numberRemoved, item 1 add, item 2 add, ...)
  let arr3 = [...arr2];
  console.log(arr3);
  for (let i = 0; i < arr1.length; i++) {
    arr3.splice(n+i, 0, arr1[i]);
    console.log(arr3);
  }
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);