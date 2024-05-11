function steamrollArray(arr) {
 
  function getNestedElement(element) {
    let result = 0;
    if (Array.isArray(element) && element.length > 0) {
        result = getNestedElement(element[0]);
      } else if (element.length == 0) {

      }
      
      else {
        result = element;
      }
    return result;
  }  

  let flatArray = [];
  let result = 0;
  // result = arr.map(getNestedElement);
  // console.log(result);

  for (let item of arr) {
    if (Array.isArray(item) && item.length > 0) {
      let splicedArray = item.splice(1,);
      if (splicedArray.length != 0) {
        arr.push(splicedArray);
      }
      result = getNestedElement(item);
      flatArray.push(result);  
      // result = item.map(getNestedElement);
    } else if (item.length == 0) {
      console.log(arr);
    }
    else {
      result = item;
      flatArray.push(result);  
    }
  
  console.log(flatArray);
  }    
  
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);