/*
let jagoff = "testing";

let fuckface = "1234";

for (let i in fuckface) {
  console.log(fuckface[i]);
  let test = jagoff.includes(fuckface[i]);
  console.log(test);
  if (!test) {
    console.log(test);
    // return test
  }
}
*/

function mutation(arr) {
  let test;
  let mainString = arr[0].toLowerCase();
  let toCheck = arr[1].toLowerCase();
  for (let i in toCheck) {
    console.log(toCheck[i]);
    test = mainString.includes(toCheck[i]);
    // console.log(test);
    if (!test) {
      // console.log(test);
      return test
    }
  }
  // console.log(test);
  return test;
}

mutation(["hello", "hey"]);