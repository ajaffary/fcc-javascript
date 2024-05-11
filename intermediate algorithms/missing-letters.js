function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  // get alphabet index of first letter in str
  let startIndex = alphabet.search(str[0]);
  console.log(startIndex);

  // increment string index 
  // i++
  // and compare with next char in alphabet
  // 
  let discrepancy = alphabet.length;

  let strIndex = 1;
  while (str[strIndex] == alphabet[startIndex + strIndex]) {
    strIndex++;
  }
  discrepancy = startIndex + strIndex;
  console.log(discrepancy);
  console.log(alphabet[discrepancy])

  return alphabet[discrepancy];
}

fearNotLetter("abce");