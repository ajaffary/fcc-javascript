function checkCashRegister(price, cash, cid) {
  console.log(price, cash);
  /*
  initialize variables
    - result = return object
    - changeDue = cash - price
    - cidTotalAvail = initial cid total
    - changeDueArray = blank copy of cid array
    - denominationArray = array of denomnination units
    - starting denomination unit = unit to begin making change
    - loop start index = index of starting denomination unit in cid
    - availDenAmt = amount of cash in current denomination available
    - query = boolean possible to make change in current denomination
  */ 

  let result = {
    status: "",
    change: [],
  };

  let changeDue = cash - price;
  // console.log(`changeDue: ${changeDue}`);
  
  /**
   * calculate total cash in a cid array
   * note: 
   * there is no running total of cid in this function
   * since the exercise does not elect to do so.
   * however, there is a running total of remaining cid 
   * from lower denominations to check if change can be
   * made once the current denomination is exhausted
   */
  function totalCashInDrawer(array) {    
    let total = 0;
    for (let drawer of array) {
      // console.log(drawer);
      // console.log(`${drawer[0]}: ${drawer[1]}`);
      total += drawer[1];
    }
    return Math.abs(Math.round(total*100)/100);
  }
  let cidTotalAvail = totalCashInDrawer(cid);
  // console.log(`cidTotalAvail: ${cidTotalAvail.toFixed(2)}`);

  /**
   * make a blank copy of cid array
   * update this to track change given
   * return this array with result object after reducing it
   * to only the denominations used to make change
   */
  let changeDueArray = cid.map((array) => [array[0], 0]);
  // console.log(changeDueArray);

  /**
   * get largest denomination with which to begin making change 
   */
  function getDenominationUnit(money) {
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
  let startUnit = getDenominationUnit(changeDue);
  let currentUnit;
  // console.log(`current denomination: ${startUnit}`);

  /* 
  array of denomination units per their location in cid
  */ 
  const denominationArray = [
    0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100
  ]
  // console.log(denominationArray);

  /* 
  get index of current denomination to start for loop
  */ 
  let startIndex = denominationArray.indexOf(startUnit)
  let currentIndex;
  // console.log(`index in cid: ${startIndex}`);

  /**
   * get amount available in current denomination
   * we need to deduct if there are units in this denomination
   * until we run out or unit is too big
   */
  function getAvailDenAmount(index) {
    return cid[index][1];
  }
  /*
  set initial value to extra decimal places 
  use this as a check to see if loop executed at least once or not
  to determine if status: CLOSED when changeDue == cidTotalAvail
  */
  let availDenAmt = 3.141592;

  /**
   * query two conditions:
   * amount available in current denomination > 0
   * changeDue > denomination unit
   */
  function queryDrawer (money, unit, available) {
    return money >= unit && available > 0;
  } 

  let query = false;
  // console.log(`enough in drawer: ${query}`);

  /**
   * deduct denomination unit from provided amount
   * repeat until query is false:
   * either available denomination runs out
   * or changeDue > denomination unit
   * return amount of change given in current denomination
   */
  function makeChangeInDen(money, unit, available) {
    let amount = 0;
    money = Math.round((money)*100)/100;
    let query = queryDrawer(money, unit, available);
    while (query) {
      money -= unit;
      money = Math.round((money)*100)/100;
      console.log(`changeDue: ${money}`);
      available -= unit;
      amount += unit;
      query = queryDrawer(money, unit, available);
    }
    return amount;
  }
  let changeInDen = 0;
  // console.log(`change in denomination: ${changeInDen}`);

  /**
   * update parameters:
   *  changeDue
   *  changeDueArray
   *  cidTotalAvail
   *  currentUnit
   *  currentIndex
   */
  function updateParameters(index, amount) {
    // remaining change due
    changeDue -= amount;
    changeDue = Math.abs(Math.round(changeDue*100)/100);
    // change array to return
    changeDueArray[index][1] += amount;
    // this isn't really necessary; can keep cid as is
    // and just use slice notation to get total below
    cid[index][1] -= amount;
    // fix this to total from next denomination onward
    // cidTotalAvail -= amount;
    cidTotalAvail = totalCashInDrawer(cid.slice(0,index));
    }

  function printParameters() {
    console.log(`changeDue: ${changeDue}`);
    console.log(`cidTotalAvail: ${cidTotalAvail}`);
    console.log(`current denomination: ${currentUnit}`);
    console.log(`index in cid: ${currentIndex}`);
  }

  /**
   * remove all unused denominations from changeDueArray
   */
  function reduceChangeDueArray(array) {
    return array.filter((entry) => entry[1] !== 0); 
  }

  /* 
  begin for loop
  */
  for (let i = startIndex; i > -1; i--) {
    console.log(i);

    /*
    set currentIndex = i
    currentIndex = startIndex at first iteration
    */
    currentIndex = i;

    /*
    set currentUnit = denominationArray[currentIndex]
    currentUnit = startUnit at first iteration
    */
    currentUnit = denominationArray[currentIndex]; 

    console.log("current parameters:");

    printParameters();

    /* 
    compare changeDue with cidTotalAvail       
    */
    // condition to make change
    if (changeDue > 0 && changeDue < cidTotalAvail) {
      /**
       * get amount available in current denomination
       */
      availDenAmt = getAvailDenAmount(i);
      console.log(`available denomination amount: ${availDenAmt}`);

      /**
       * check if amount available in current denomination 
       * is enough to make change
       */
      query = queryDrawer(changeDue, currentUnit, availDenAmt);
      console.log(`query: ${query}`);

      /**
       * deduct denomination unit from provided amount
       * repeat until query is false:
       * either available denomination runs out
       * or changeDue > denomination unit
       * return amount of change given in current denomination
       */
      changeInDen = makeChangeInDen(changeDue, currentUnit, availDenAmt);
      console.log(`change in denomination: ${changeInDen}`);

      /**
       * update data:
       *  changeDue
       *  changeDueArray
       *  cid
       *  cidTotalAvail (from next lowest denomination to penny)
       */
      
      updateParameters(currentIndex, changeInDen);
      console.log("updated parameters:");
      printParameters();
    }
    // no more change to make
    console.log(changeDue == cidTotalAvail);
    if (changeDue == 0 && cidTotalAvail > 0) {
      // reduce changeDueArray per exercise specification
      changeDueArray = reduceChangeDueArray(changeDueArray);
      // update result status: OPEN
      result.status = "OPEN";
      // update result change: changeDueArray
      result.change = changeDueArray;
      // break out of loop
      i = -1;
    }

    // return remaining cid
    else if (changeDue == cidTotalAvail) {
      /* 
      - Need a condition here:
      - Status CLOSED, if loop did not execute (equality at outset)
      - Return entire CID
      - Status OPEN, if loop executed at least once
      - return the slice of CID, including the current (new) denomination onward

      - Condition needs to check if loop executed at least once
        regardless of what denomination the loop begins
        - can create a separate counter = 0 for # times loop executes
      - That means something is different from original CID
        - cid[index][1] -= amount
        - can store original CID total and check current total against that
      - that means availDenAmt is its initial value
        - can use this as a condition
        - set some strange value with extra decimal places
      */
      if (availDenAmt == 3.141592) { 
        result.status = "CLOSED";
        // cid is not changed if loop did not execute
        result.change = cid;
      } else {
        console.log("DING");
        // append remaining cid to changeDueArray
        changeDueArray = changeDueArray.concat(cid.slice(0,index));
        console.log(changeDueArray);
        // reduce changeDueArray per exercise specification
        changeDueArray = reduceChangeDueArray(changeDueArray);
        // update result status: OPEN
        result.status = "OPEN";
        // update result change: changeDueArray
        result.change = changeDueArray;
        }
        // break out of looploop
    }
    // remaining cid insufficient
    else if (changeDue > cidTotalAvail) {
      // update result status: INSUFFICIENT_FUNDS
      result.status = "INSUFFICIENT_FUNDS";
      // update result change: empty array
      result.change = [];
      // break out of loop
      i = -1;
    }
  }
  
  /* 
  end for loop
  */

  console.log(result);
  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);