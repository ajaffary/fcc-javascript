function repeatStringNumTimes(str, num) {
  let newstr = "";
  for (let i=0; i < num; i++) {
    newstr += str;
    console.log(newstr);
  }
  return newstr;
}

repeatStringNumTimes("abc", 3);