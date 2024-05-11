function sentensify(str) {
  // Only change code below this line
  let array = str.split(/[-.,]/);
  console.log(array);
  let sentence = array.join(" ");
  console.log(sentence);
  return sentence;
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");