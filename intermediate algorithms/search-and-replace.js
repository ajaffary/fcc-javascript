function myReplace(str, before, after) {

  // search first letter of before
  let beforeCap = before.search(/^[A-Z]/);
  console.log(beforeCap);
  
  let afterCap = after.search(/^[A-Z]/);
  console.log(afterCap);
  
  // capital has index 0
  // if so, make sure after has first letter capital
  if (beforeCap != afterCap) {
    if (beforeCap == 0) {
      // capitalize first letter of after
      let first = after[0];
      let rest = after.slice(1,);
      after = first.toUpperCase() + rest;
      console.log(after);
    } else {
      let first = after[0];
      let rest = after.slice(1,);
      after = first.toLowerCase() + rest;
      console.log(after);
    }
  }
  let replaced = str.replace(before, after)
  console.log(replaced)
  // search sentence for 'before'
  // replace 'before' with 'after'

  return replaced;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");