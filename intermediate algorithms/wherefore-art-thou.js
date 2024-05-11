function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  console.log("Start");
  console.log("Collection:");
  console.log(collection);
  console.log("Source:");
  console.log(source);
  /*
  let keys = Object.keys(source);
  console.log(keys);
  let values = Object.values(source);
  console.log(values);
  */

  // create a function that checks if a key:value pair is equal between two objects
  // for a given target object and a given source object, iterate this function over the source object while two conditions are true: 1) key:value pair in source appears in the target object, and 2) the loop counter is less than the source length
  // if a key:value pair from source appears in the target object, increment source loop counter
  // target object may have several keys, so may need to iterate over every key
  // when a key:value match is made, exit the object keys loop
  // if loop counter reaches source length, this means every key:value pair in source appears in object
  // if any source key:value pair does not appear in object, set loop counter to a value larger than source length
  // after exiting the loop, add object to new array only if loop counter is equal to source length 

  // iterate above over each object in collection array

    // for a given object collection[i]
  for (let i = 0; i < collection.length; i++) {
    
    // check if kth source key is equal to jth key in collection[i]

    console.log("i = " + i);
    
    let k = 0; // source key counter
    let n = Object.keys(source).length;
    console.log("n = " + n);

    let j = 0; // object keys counter
    let m = Object.keys(collection[i]).length;
    console.log("m = " + m);

    // while (k < n) source loop
    while (k < n) {
    
    console.log("k = " + k);
        j = 0;
    // start checking for equality with array of j object keys
        while (j < m) {
        // problem: we do not necessarily need to iterate through this whole array; we only need to iterate until a key:value match is found
          console.log("j = " + j);
    
    // print current keys
      console.log("Source Key " + k + ": " + Object.keys(source)[k]);

      console.log("Collection Element " + i + " Key " + j + ": " + Object.keys(collection[i])[j]);

    // check if keys match
    if (Object.keys(source)[k] == Object.keys(collection[i])[j]) {
      // if keys match, check if values match
     console.log("keys match") 

    // print current values
    console.log("Source Value " + k + ": " + Object.values(source)[0]);

    console.log("Collection Element " + i + " Value " + j + ": " + Object.values(collection[i])[j]);

      // check if values match
      if (Object.values(source)[k] == Object.values(collection[i])[j]) {
    
    // if values match, increment source key counter to check next source key.  also, set target object key counter to something larger than keys length to exit object keys for loop
    console.log("values match");
    k++;
    j = m+1;
         } else {
     // if values do not match, increment j to start checking the next object key
     console.log("values do not match")
     j++;
         };
    } else {
      // if keys do not match, increment j to check the next object key
      console.log("keys do not match")
      j++;
    }; // end of object keys while loop
    // what happens if j is equal to the object keys length?  this means every key in an object i was checked and did not match.  in that case, we want to exit the source while loop
    if (j == m) {
      // we set k greater than the source length
      k = n+1;
    };
  }; // end of object while loop
  } // end of source while loop
    // once out of source while loop, make a decision:
  // if k == n, this means all n source key:value pairs were found in object collection[i]
    if (k == n) {
    // add object into new array
    arr.push(collection[i]);
    };
    console.log(arr);

  // else if k > n, some key:value pair in source does not appear anywhere in object
    if (k > n) {
      // do nothing; we iterate to next object in collection
      console.log("source does not appear in collection object " + i)
    };

};
  console.log("End");
    // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
