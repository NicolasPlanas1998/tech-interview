function intersection (arr1, arr2) {
  // Your code here:
  let allArr = arr1.concat(arr2)
  let uniqueValueArr = []
  let repitedValue = []
  for (let i = 0; i < allArr.length; i++) {
    if(!uniqueValueArr.includes(allArr[i])) uniqueValueArr.push(allArr[i])
    else repitedValue.push(allArr[i])
  }
  return repitedValue  
}



console.log(intersection([1,3, 5, 7, 10], [2, 3, 6, 8, 10, 20])) //([3, 10])
console.log(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])) // 3
console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])) // []




module.exports = intersection
