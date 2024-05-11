function alphabeticalOrder(arr) {
  // Only change code below this line
  let sorted = arr.sort(function(a,b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  console.log(sorted);
  return sorted;
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);