function truthCheck(collection, pre) {
  
  let counter = 0;

  for (let item of collection) {
    console.log(item[pre]);
    if (!item[pre]) {
      counter--;
    }
  }

  console.log(counter);

  let bool = 0;

  if (counter == 0) {
    bool = true;
  } else {
    bool = false;
  }
  
  return bool;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");