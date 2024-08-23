 const oldDenominationIndex = {
      100: 8,
      20: 7,
      10: 6,
      5: 5,
      1: 4,
      0.25: 3,
      0.1: 2,
      0.05: 1,
      0.01: 0,
  }
  
    // make copy of cid
    // update this to track change given
    // return this with result object
    let changeDueArray = cid.map((array) => [array[0], 0]);
    // console.log(changeDueArray);
  
    // map denomination unit to its index in cid
    // use in makeChange function below
    const denominationIndex = {
        0: 0.01,
        1: 0.05,
        2: 0.1,
        3: 0.25,
        4: 1,
        5: 5,
        6: 10,
        7: 20,
        8: 100,
      };
    // console.log(denominationIndex);
  
    function getDenominationUnit(money) {
      /* 
      get largest denomination with which to make change
      */
      if (money >= 100) {
        return 100;
      } else if (100 > money && money >= 20) {
        return 20;
      } else if (20 > money && money >= 10) {
        return 10;
      } else if (10 > money && money >= 5) {
        return 5;
      } else if (5 > money && money >= 1) {
        return 1;
      } else if (1 > money && money >= 0.25) {
        return 0.25;
      } else if (0.25 > money && money >= 0.1) {
        return 0.1;
      } else if (0.1 > money && money >= 0.05) {
        return 0.05;
      } else {
        return 0.01;
      }
    }
  
    let currentUnit = getDenominationUnit(changeDue);
    console.log(`current denomination: ${currentUnit}`);
    
    function getDenominationIndex(unit) {
      /* 
      map denomination unit to index in cid array
      */
      return denominationIndex[unit];
    }
  
    let currentIndex = getDenominationIndex(currentUnit);
    console.log(`index in cid: ${currentIndex}`);

    
    function getAvailableAmount(index) {
        /* 
        get amount of cash available in current denomination
        */
        return cid[index][1];
      }
      
      let availDenAmt = getAvailableAmount(currentIndex);
      console.log(`available denomination amount: ${availDenAmt}`);
    
      function queryDrawer (money, available) {
        /* 
        determine if amount available in current denomination 
        is enough to provide change
        */
        return money <= available && available > 0;
      }
    
      let query = queryDrawer(changeDue, availDenAmt);
      console.log(`enough in drawer: ${query}`);
    
      function getDenominationAmount(money, unit) {
        /* 
        - determine max possible amount from current denomination
        - deduct this amount from change due
        - add the amount to change given
        - return an object with remaining change due and amount of
        change given
        */
        let amount = 0;
        while (money >= amount) {
          money -= unit;
          amount += unit;
        }
        return {"remaining": money, "returned": amount};
      }
      
      let returnedDenAmt = getDenominationAmount(changeDue, currentUnit);
      // console.log(returnedDenAmt);
    
      function updateDrawer(index, amount) {
        /* 
        - update cid
        - update changeDueArray
        with amount taken from denomination
        */
        cid[index][1] -= amount;
        changeDueArray[index][1] += amount;
      }
    
      function makeChangeIfAvailable(money, unit, index, query) {
        /* 
        - query the drawer
          - if true:
            - run getDenomination function
            - update cid and changeDueArray
          - if false:
            - return "denomination not available"
        */
        if (query) {
          let changeMade = getDenominationAmount(money, unit);
          updateDrawer(index, changeMade.returned);
          return changeMade;
        } else {
          return `not enough available in ${unit} denomination`;
        }
      }
      
      let currentChangeQuery = makeChangeIfAvailable(changeDue, currentUnit, currentIndex, query);
      console.log("current change query:");
      console.log(currentChangeQuery);
    
      // updated cid
      console.log("current cid:");
      console.log(cid);
    
      // updated change due array
      console.log("current change due array:");
      console.log(changeDueArray);
    
      function reduceChangeDueArray(array) {
        // remove all unused denominations from changeDueArray
       return array.filter((entry) => entry[1] !== 0); 
      }
    
      changeDueArray = reduceChangeDueArray(changeDueArray);
    
      if (changeDue > cid) {
        // cid < changeDue
          result.status = "INSUFFICIENT_FUNDS";
          result.change = [];
      } else if (changeDue == cid) {
        // cid == changeDue
          result.status = "CLOSED";
          result.change = cid;
      } else {
        // cid > changeDue
          // try to make change
          // if exact change available:
          result.status = "OPEN",
          result.change = changeDueArray;
          // else:
          // result.status = "INSUFFICIENT_FUNDS";
          // result.change = [];
      }


  /**
   * this function is not necessary
   * run each of these separately
   * make change function:
   * query the drawer
   * if true:
   *  run makeChangeInDem function
   *  run updateDrawer to update cid and changeDueArray
   * if false:
   *  return "denomination not available"
   */
  function makeChangeIfAvailable(money, unit, index, query) {
    if (query) {
      let changeMade = makeChangeInDen(money, unit);
      updateDrawer(index, changeMade.returned);
      return changeMade;
    } else {
      return `not enough available in ${unit} denomination`;
    }
  }
  
  let currentChangeQuery = makeChangeIfAvailable(changeDue, currentUnit, currentIndex, query);
  console.log("current change query:");
  console.log(currentChangeQuery);

