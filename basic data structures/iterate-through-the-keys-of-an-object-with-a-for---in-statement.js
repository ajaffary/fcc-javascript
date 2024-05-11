const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let usersOnline = 0;
  for (let user in usersObj) {
    console.log(user);
    console.log(usersObj[user].online);
    if (usersObj[user]['online']) {
      usersOnline++;
    };
  };
  return usersOnline;
  // Only change code above this line
}

console.log(countOnline(users));