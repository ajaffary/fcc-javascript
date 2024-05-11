function findElement(arr, func) {
  let i = 0;
  let num = arr[0];
  let test = func(arr[0]);
  console.log(func(arr[i]));
  while (!test) {
    i++;
    test = func(arr[i]);
    console.log(test);
    num = arr[i];
    console.log(num);
  };
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);