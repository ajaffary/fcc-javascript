function sumFibs(num) {
  let a = 0;
  let b = 1;
  let fib = 0;
  let fibNumbers = [1,];
  // generate odd Fibonacci numbers 
  while (fib <= num) {
    if (fib % 2 == 1) { fibNumbers.push(fib) }
    fib = a + b;
    a = b;
    b = fib;
  }
  console.log(fibNumbers);
  // reduce fibNumbers to sum
  let result = fibNumbers.reduce((total, current) => total + current);
  console.log(result);
  return result;
}

sumFibs(4);