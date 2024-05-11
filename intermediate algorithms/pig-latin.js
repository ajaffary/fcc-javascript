function translatePigLatin(str) {

  const vowels = /[aeiou]/;
  console.log(vowels.test(str[0]));

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  // search returns index of first match

  // return index of first vowel
  let index = str.search(vowels)
  console.log(index);

  let first = str.slice(0,index);
  console.log(first)
  
  let rest = str.slice(index,);
  console.log(rest)

  let newStr = "";

  // cases where vowel appears:
  // index = 0
  // index = k > 0
  // index = -1 (no vowels)

  if (index == 0) {
    newStr = str + "way";
  } else if (index > 0) {
    newStr = rest + first + "ay";
  } else {
    newStr = str + "ay";
  }

  console.log(newStr);
  
  return newStr;
}

translatePigLatin("consonant");