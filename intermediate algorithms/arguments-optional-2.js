function addTogether(...inputs) {
  
  let result = 0;

  // check if any inputs are NaN
  for (let input of inputs) {
    if (typeof input !== 'number') {
      return undefined;
    }
  }

  function newFunction(number) {
    if (typeof number !== 'number') {
      return undefined;
    } else {
      return inputs[0] + number;
    }
  }

  // when inputs are numbers
  if (inputs.length == 2) {
    result = inputs.reduce((total, current) => total + current);
    } 
    else if (inputs.length == 1) {
      return newFunction;
    }  

  console.log(result);
  return result;
}

addTogether(2,3);