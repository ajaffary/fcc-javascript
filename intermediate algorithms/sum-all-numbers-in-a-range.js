function sumAll(arr) {
  // sort the array
  let sorted = arr.sort((a,b) => {return a-b});
  console.log(sorted);

  // reduce by summing
  // let sum = sorted.reduce((sum, number) => sum + number, 0);

  let sum = 0;

  for (let i = arr[0]; i<= arr[arr.length-1]; i++) {
    sum += i;
  };

  console.log(sum);

  return sum;
}

sumAll([1, 4]);