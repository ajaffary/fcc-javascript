function destroyer(arr, ...args) {
  //console.log(arr)
  //console.log(args)
  let newArr = arr.filter((value) => !args.includes(value));
  //console.log(newArr)
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);