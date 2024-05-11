function findLongestWordLength(str) {
  // let array = str.split(" ");
  let array = str.split(' ');
  console.log(array);
  let maxLength = 0;
  for (let i=1; i<array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
      str = array[i];
      console.log(str);
     };
  };
  console.log(str.length);
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");