function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(min);
  console.log(max);
  console.log(4 % 2);

  function euclidean(a, b) {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let r = max % min;
    console.log(`r: ${r}`)
    if (r != 0) {
      return euclidean(min, r);
    } else { 
      return min; 
    }
  }
  let lcm = max*(max-1);
  console.log(`lcm: ${lcm}`);

  if (max - min < 2) {
    return lcm 
  } else {
    for (let i = max-2; i >= min; i--) {
      console.log(i);
      let gcd = euclidean(lcm, i);
      console.log(`gcd(${lcm},${i}): ${gcd}`);
      if (gcd > 1) {
        lcm = (lcm * i) / gcd;
      } else {
        lcm = lcm * i;
      }
      console.log(`lcm: ${lcm}`);
    }
    console.log(lcm);
  }
  return lcm;
}

smallestCommons([1,5]);