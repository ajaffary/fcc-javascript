function rangeOfNumbers(startNum, endNum) {
  // add error message when startNum > endNum?
  let n = endNum - startNum;
  if (n < 1) {
    return [startNum];
  } else {
      let myArray = rangeOfNumbers(startNum, endNum - 1);
      myArray.push(endNum);
      return myArray;
  } 
};