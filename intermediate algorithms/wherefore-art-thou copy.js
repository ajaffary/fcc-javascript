function whatIsInAName(collection, source) {
  //input is an array of objects
  //output is an array of objects

  // if {name:value} is in collection, add it to new array
  
  // newArray.push(collection[i])
  console.log(collection);
  console.log(source);
  let newArray = [];
  for (let i=0; i < collection.length; i++) {
      let bool = [];
      let valbool = [];
      // const numberKeys = Object.keys(source).length;
     //  let counter = 1;
        for (let key of Object.keys(source)) {
          bool.push(Object.keys(collection[i]).includes(key));
          // counter = numberKeys + 1;
            // restart from here and skip the rest
          }
      console.log(bool);
      if (bool.includes(false)) {
        console.log("hi");
      }
      else {
        for (let [key, value] of Object.entries(source)) {
            valbool.push(value === collection[i][key])
          }
        console.log(valbool);
        if (valbool.includes(false)) {
          console.log("hi again")
        }
        else {
          newArray.push(collection[i]);
        }
      }
  }
  console.log(newArray)
  console.log("\n")
  return newArray
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });