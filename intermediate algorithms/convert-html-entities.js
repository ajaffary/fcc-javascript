function convertHTML(str) {
  const chars = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;"
  }
  // console.log(chars["\'"]);
  
  let matches = str.match(/[&<>\"\']/g);
  console.log(matches);

  let newStr = "";
  if (matches != null) {
    for (let char of matches) {
      str = str.replaceAll(char, chars[char]);
    }    
  }
  console.log(str)

  return str;
}

convertHTML("Dolce & Gabbana");