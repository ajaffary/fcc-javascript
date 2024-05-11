function largestOfFour(arr) {
  for (let i=0; i < arr.length; i++) {
    let largestElement = arr[i][0];
    for (let j=1; j < arr[i].length; j++) {
      if (largestElement < arr[i][j]) {
        largestElement = arr[i][j];
      }
    }
    arr[i] = largestElement;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);