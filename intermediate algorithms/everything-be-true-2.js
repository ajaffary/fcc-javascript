function truthCheck(collection, pre) {
  
  let counter = 0;

  let bool = true;

  while (bool && counter < collection.length) {
    if (collection[counter][pre]) {
      counter++;
    } else {
      bool = false;
    }
    console.log(counter);
  }

  /*
  for (let item of collection) {
    // console.log(item[pre]);
    if (!item[pre]) {
      counter--;
    }
  }

  if (counter == 0) {
    bool = true;
  } else {
    bool = false;
  }
  */
  console.log(bool);
  
  return bool;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");