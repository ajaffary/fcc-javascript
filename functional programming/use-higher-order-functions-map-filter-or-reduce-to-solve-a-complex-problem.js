const squareList = arr => {
  // Only change code below this line

  // filter positive integers from array
  let filtered = arr.filter(number => number == Math.floor(number)).filter(number => number > 0);
  console.log(filtered);

  // map numbers into squares

  let squares = filtered.map(number => number**2);
  
  console.log(squares);

  return squares;
  // Only change code above this line
};




const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);