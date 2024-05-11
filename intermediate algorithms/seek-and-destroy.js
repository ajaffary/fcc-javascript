function destroyer(arr) {

  // need arguments.length
  // iterate a for loop over the arguments to check membership in array
  // if true, remove the item
  // instead, when false, add item to a new array
  // 
  for (let j = 1; j < arguments.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arguments[j]) {
        delete arr[i];
        console.log(arr);
        }
      }
    }
  let newArr = arr.filter(element => element !== "");
  console.log(newArr);

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);