function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function compareFunction(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  return arr;
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);