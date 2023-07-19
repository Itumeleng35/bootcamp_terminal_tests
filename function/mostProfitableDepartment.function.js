function mostProfitableDepartment(profitDept) {
    const result = {}
  for (var i=0; i<profitDept.length; i++) {
    let sales1 = profitDept[i].sales //this is dot notation, because we want to access the value of sales
    const deptList = profitDept[i].department
    if (result[deptList]) {   //add keys to an object by using bracket notation, we use dot notation to access a key
      result[deptList] += sales1 
    }
    else{result[deptList] = sales1} //if the dept isn't there, we are instructing it to be there and it should be equal to sales
  }
    //console.log(result)
  let highDept = ''
  let highSales = 0
  for (let deptList in result) {
    if (result[deptList] > highSales) { //dept list in this context access the value of the key called department
    highSales = result[deptList] 
      highDept = deptList
    }
  }
  return highDept
 
}

function mostProfitableDay (profitDay) {
    const result = {}
    for (var i=0; i<profitDay.length; i++) {
      let sales2 = profitDay[i].sales
      const daysList = profitDay[i].day
      if (result[daysList]) {
        result[daysList] += sales2
      }
      else{result[daysList] = sales2}
    }
    //console.log(result)
  let highDay = '' // we are looking for the DAY but we don't know which one it is at this point, so we create an empty string
  let highSales = 0
  for (let daysList in result) { //syntax for looping through objects(results)
    if (result[daysList] > highSales) {
      highSales = result[daysList]
      highDay = daysList
    }
  }
    return highDay
  }


  export {
    mostProfitableDepartment, mostProfitableDay
  }