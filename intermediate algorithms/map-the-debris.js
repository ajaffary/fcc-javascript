function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  function altToPeriod(altitude) {
    let alt = earthRadius + altitude;
    return 2*Math.PI*Math.sqrt((alt**3)/GM);
  }
  // console.log(2*(Math.PI)*Math.sqrt((earthRadius**3)/GM));
  
  // compute orbital period
  // let period = altToPeriod(arr[0].avgAlt);
  // console.log(period);

  // assign to object
  for (let obj of arr) {
    console.log(obj.avgAlt);
    
    obj.orbitalPeriod = Math.round(altToPeriod(obj.avgAlt));
    console.log(obj.orbitalPeriod);

    delete obj.avgAlt;

    console.log(obj);
  }
  
  
  //.map((element) => (element.orbitalPeriod = altToPeriod(element.avgAlt)));

  console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);