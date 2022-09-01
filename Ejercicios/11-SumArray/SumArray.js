function SumArray (arr, n) {
  // Your code here:
  let res = []
  for(let i=0; arr.length > i; i++){
    arr.forEach(el => {
      // console.log(arr[i] + el)
      let result = arr[i] + el 
      if(result === n) res.push(result)
    });
}
  if(res.length) console.log(true)
  else console.log(false)
}

let test1 = [2,4,5,9]
let num = 9

SumArray(test1,num)
// console.log(SumArray(test1,num))

module.exports = SumArray
