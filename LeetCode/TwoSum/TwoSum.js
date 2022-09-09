// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// var twoSum = function(nums, target) {
//     let index = []
    
//     for(let i=0; i < nums.length; i++) {
//       let acc = 0
//       index.push(i)
//       acc = nums[i] //3 2 4
  
//       for(let j=1; j <= nums.length; j++){
//         acc += nums[j] // 3+2 
//         console.log(acc);
//         index.push(j)
//         if(acc > target) {
//           console.log(acc);
//             acc = 0
//             index = []
//         }
//         if(acc === target) return index
//     }
//     }
//   };
var twoSum = function(nums, target) {
  let correctIndex = []
  for (let i = 0; i < nums.length; i++) {
    if(correctIndex.length === 2) return (correctIndex) 
    
    console.log(correctIndex);
    secondIndex = i+1
    for (secondIndex; secondIndex < nums.length; secondIndex++) {
      let option = nums[i]+nums[secondIndex]
      // console.log({i,j:secondIndex});
      // console.log(option);
      
      if(option === target) {
        correctIndex.push(i,secondIndex)
        break
      }
    }

  }
  };

  console.log(twoSum([2,7,11,15],9));
  console.log(twoSum([3,2,4],6));
  console.log(twoSum([3,3],6));
  console.log(twoSum([2,5,5,11],10));
