function sumPrimes(num) {
  let primes = [2];
  let current = 3;

  while (current <= num) {
    let index = 0;
    while (index < primes.length) {
      // check divisibility
      if (current % primes[index] == 0) {
        // if divisible, break out of inner while loop
        index = primes.length + 1;
        console.log(index);
      } else {
        // increment index to go to next divisor
        index++;
        console.log(index);
      }
    }
    // if not divisible, add to primes array
    index == primes.length ? primes.push(current) : {};
    // increment current and start over
    current > 10 && current % 10 == 3 ? current += 4 : current += 2;
  }
  console.log(primes)
  let sum = primes.reduce((total, current) => total + current)
  
  console.log(sum)
  return sum;
}

sumPrimes(10);