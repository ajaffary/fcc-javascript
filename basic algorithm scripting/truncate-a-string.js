function truncateString(str, num) {
  if (str.length > num) {
  console.log(str.slice(0,num))
  let truncStr = str.slice(0,num) + "...";
  console.log(truncStr);
  return(truncStr);
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);