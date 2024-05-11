// https://stackoverflow.com/questions/12993629/what-is-the-meaning-of-the-g-flag-in-regular-expressions


// condition ? exprIfTrue : exprIfFalse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#using_an_inline_function_that_modifies_the_matched_characters

function spinalCase(str) {
    // regex for capitals surrounded by lowercase
    // /([A-Z][a-z]+)/ 
    // /([A-Z][a-z]*)+/ 

    let separate = str.replace(/\B[A-Z]/g, (match) => {
        return ' ' + match.toLowerCase();
    });
    console.log(separate);

    // split at spaces or underscores
    let array = separate.split(/\s|_/g);
    console.log(array);

    let newArray = [];
    for (let word of array) {
      // replace capital letters with -capital
      newArray.push(word.replace(/[A-Z]/g, (match) => {
        return match.toLowerCase();
      } ));
      console.log(word);
    }
    console.log(newArray)

    // filter out empty entries
    let filterArray = newArray.filter((word) => word.length > 0);
    console.log(filterArray);

    // join into new string
    let newStr = filterArray.join('-');
    console.log(newStr);

    // convert entire string to lowercase
    let result = newStr.toLowerCase();
    console.log(result);

    // remove leading hyphen
    if (result[0] == "-") {
      result = result.slice(1,);
    }
    console.log(result)
  
  return result;
}

spinalCase('This Is Spinal Tap');