function confirmEnding(str, target) {
  let start = str.length - target.length;
  let end = str.length;
  console.log(str.substring(start,end));
  return (str.substring(start,end) == target);
}

confirmEnding("Bastian", "n");