function chunkArrayInGroups(arr, size) {
  // number of arrays =
  // length of for loop
  console.log(arr);

  let n = arr.length/size;
  console.log(n);
  console.log(Math.floor(n));

  if (n > Math.floor(n)) {
    n = Math.ceil(n);
    
  };
  console.log(n)

  let start = 0;
  let end = start + size;

  let newArray = [];

  for (let i=0; i < n; i++) {
    let arrChunk = arr.slice(start,end);
  console.log(arrChunk);
    start = end;
    if (end+size <= arr.length) {
      end = end + size;
    } else {
      end = arr.length;
    };
    newArray.push(arrChunk);
    console.log(newArray);
  }
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);