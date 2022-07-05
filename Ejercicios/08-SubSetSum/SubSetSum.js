function subsetSum (nums, n) {
  // Your code here:
  let result = 0
  // for(i of nums){
  //   for(m of nums){
  //     let result = i+m
  //     if(result === n || i === n) res = true
  //   }
  // }
  for(index in nums){
    result = nums
    result = nums.reduce(function(ac, el){
      return ac+el
    })  

  }
  console.log(result)
}


let nums = [1,10,5,3]
let target = [9]
subsetSum(nums,target)
module.exports = subsetSum
