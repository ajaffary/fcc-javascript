const falsy = [false, null, 0, "", undefined, NaN];

/* 
let jagoff = [1, 2, false];
let i = 1;
let test = falsy.includes(jagoff[i]);
*/

function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let test = falsy.includes(arr[i]);
    console.log(test);
    if (!test) {
      newArr.push(arr[i])
      };
    console.log(newArr);
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);