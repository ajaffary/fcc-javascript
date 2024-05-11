const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = arr.concat([]);
  console.log(newArray);
  newArray.sort(function(a,b) {
    return a - b;
  });
  console.log(newArray);
  return(newArray);
  // Only change code above this line
}

nonMutatingSort(globalArray);