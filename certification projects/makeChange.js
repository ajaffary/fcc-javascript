  /* 
  Algorithm to Make Change

  internal parameters:
  - changeDue
  - changeDueArray
  - currentUnit
  - currentIndex
  - cidTotalLower
  - availableDenAmt
  - query
  - currentChangeQuery
  - reducedChangeDueArray
  
  Algorithm:

  initialize:
  - changeDue = current amount of change to make
  - determine currentUnit
    - this determines when changeDue < denomination unit
  - determine currentIndex
  - compute cidTotalLower
        - this is total from currentUnit to lowest

  ** begin loop **
  - compare changeDue vs. cidTotalLower
    - if changeDue < cidTotalLower:
      - run make change process:
        - determine denomination
        - query the cid to get availableDenAmt
        - check changeDue < availableDenAmt
          - and check that changeDue > currentUnit
          - while true:
            - make change:
              - subtract the denomination unit from cid 
              - subtract the denomination unit from changeDue
              - add the denomination unit to cidCopy array
      - when while loop terminates:
        - move to next appropriate denomination unit
          - recalculate getCurrentUnit(changeDue)
        - recalculate updated {cidTotalLower} (change this name?)
        - repeat above
    - else process terminates when:
      - 1) we cannot make exact change
        - this is when current denomination is too big:
          - changeDue < availableDenAmt (condition to make change with current denomination)
            - e.g. changeDue = 10.01 < 20 = availableDenAmt in $20
        - but changeDue is greater than both:
          - current denomination
            - changeDue > currentUnit
          - _total of all smaller denominations_
            - changeDue > cidTotalLower
        - so we recalculate cidTotalAvail after each iteration:
          - update initialValue of reduce to current index
        - we check this condition at the beginning of each loop?
        - this is similar to 3rd condition
      - 2) we have made exact change
        - changeDue == 0
        - this is similar to second condition
  ** end loop **


    - else if changeDue == cidTotal:
      - return result object with:
        - status: "CLOSED"
        - change: cid
    - else:
      - return result object with:
        - status: "INSUFFICIENT_FUNDS"
        - change: []      
  */

  /* 
  logic issue:
  - make one of three choices below
  - choice is based on comparing changeDue vs. cidTotalAvail
    - if changeDue < cidTotalAvail, then execute makeChange
    - makeChange will change the values of:
      - changeDue
      - cidTotalAvail
      - availableDenAmt
  - so the choice needs to be made every time makeChange is executed
  - how to loop this?
  */

  /* 
  - choose denomination
      - condition for new denomination:
      - current denomination amount == 0
      OR
      - changeDue < unit of denomination
  - attempt to make change 
  three outcomes:
  
  1) changeDue < cidTotalAvail
    - keep making change

  2) changeDue == cidTotalAvail
    - return rest of cid exactly as is

  3) changeDue > cidTotalAvail
    - insufficient funds
  */

  /* another idea, not used here:
  // convert cid to an Object
  // use this to reduce drawer and make change?
  // rather than mutate original cid
  let cidObj = Object.fromEntries(cid);
  // console.log(cidObj);

  // https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
  // change cidObj back to final cid array
  // use this array in returned result object
  let cidResult = Object.keys(cidObj).map((key) => [key, cidObj[key]]).toReversed();
  // console.log(cidResult);
  */

  function checkCashRegister(price, cash, cid) {
    let result = {
      status: "",
      change: [],
    };
  
    // compute changeDue = cash - price
    let changeDue = cash - price;
    console.log(`changeDue: ${changeDue}`);
  
    // determine total cid
    function totalCashInDrawer(cidArray) {
      let total = 0;
      for (let drawer of cidArray) {
        // console.log(drawer);
        // console.log(`${drawer[0]}: ${drawer[1]}`);
        total += drawer[1];
      }
      return total;
    }
  
    let cidTotal = totalCashInDrawer(cid);
    console.log(`total cid: ${cidTotal.toFixed(2)}`);
  
    // make copy of cid
    // update this to track change given
    // return this with result object
    let changeDueArray = cid.map((array) => [array[0], 0]);
    // console.log(changeDueArray);
  
    // map denomination unit to its index in cid
    // use in makeChange function below
    const denominationIndex = {
        100: 8,
        20: 7,
        10: 6,
        5: 5,
        1: 4,
        0.25: 3,
        0.1: 2,
        0.05: 1,
        0.01: 0,
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
  
    console.log(result);
    return result;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);