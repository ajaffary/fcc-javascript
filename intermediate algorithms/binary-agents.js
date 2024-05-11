// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

function binaryAgent(str) {
  
  let bin = str.split(" ");
  // console.log(bin);
  
  // let dec = parseInt(bin[0], 2);
  // console.log(dec);
  // let result = String.fromCharCode(dec);
  // console.log(result);
  
  let array = bin.map((element) => String.fromCharCode(parseInt(element, 2)));
  //console.log(array);
  
  let newStr = array.join('');
  console.log(newStr);

  return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");