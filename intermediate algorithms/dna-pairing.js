function pairElement(str) {
  // turn into array of characters
  let arrayOne = str.split('');
  console.log(arrayOne);

  // let test = "AB";
  // let result = test.search("A");
  // console.log(result);
  // console.log((result+1)%2);

  // make arrays of base pairs
  const cg = ["C", "G"];
  const gc = ["G", "C"];
  const at = ["A", "T"];
  const ta = ["T", "A"];

  // concatenate each base with pair

  for (let i=0; i < arrayOne.length; i++) {
    // get character
    if (arrayOne[i] == "C") {
      arrayOne[i] = cg;
    } else if (arrayOne[i] == "G") {
      arrayOne[i] = gc;
    } else if (arrayOne[i] == "A") {
      arrayOne[i] = at;
    } else if (arrayOne[i] == "T") {
      arrayOne[i] = ta;
    }
    // can skip this step and instead replace with
    // one of the above arrays
    // arrayOne[i] = arrayOne[i].split('');
    
    console.log(arrayOne[i])
  }
  console.log(arrayOne)
  return arrayOne;
}

pairElement("GCG");