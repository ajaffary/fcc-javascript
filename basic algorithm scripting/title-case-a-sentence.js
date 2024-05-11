function titleCase(str) {
  let array = str.split(" ");
  console.log(array);
  let newStr = "";
  
  for (let i = 0; i < array.length; i++) {
  let capital = array[i].slice(0,1);
  console.log(capital);
  let rest = array[i].slice(1,);
  console.log(rest.toLowerCase());
  console.log(capital.toUpperCase());
  array[i] = capital.toUpperCase() + rest.toLowerCase();
  console.log(array[i]);
  newStr += array[i] + " ";
  console.log(newStr);
  }

  console.log(array);
  console.log(newStr.slice(0,newStr.length - 1));
  return newStr.slice(0,newStr.length - 1);
}

titleCase("I'm a little tea pot");