// count number of values it is greater than
// do comparison b > a
// add one to counter every time this is true
// iterate this over entire array

function getIndexToIns(arr, num) {
  let greaterThan = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      greaterThan++;
      console.log(greaterThan);
    }
  }
  return greaterThan;
}

getIndexToIns([40, 60], 50);