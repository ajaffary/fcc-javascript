function uniteUnique(...arr) {
  console.log(arr);
  let newArray = [];
  for (let array of arr) {
    newArray = newArray.concat(array);
  }
  newArray = [...new Set(newArray)];
  console.log(newArray);
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);