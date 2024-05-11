

function reverseString(str) {
  let array = str.split("");
  str = "";
  console.log(array);
  for (let i = array.length-1; i >= 0; i--) {
    str = str + array[i];
    console.log(str);
  }
  return str;
}

reverseString("hello");