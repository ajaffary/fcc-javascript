function findElement(arr, func) {
  let i = 0;
  let num = arr[0];
  let test = func(arr[0]);
  console.log(func(arr[0]));
  while (!func(arr[i])) {
    i++;
    num = arr[i];
    console.log(func(num));
    console.log(num);
  };
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);