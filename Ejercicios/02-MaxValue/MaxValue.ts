function MaxValue (shares:number[]):number  {
    // Your code here:
    return 2
  }
  

  console.log(MaxValue([4, 3, 2, 5, 11]));
  // output :9
  console.log(MaxValue([23, 7, 3, 4, 8, 6]));
  // output :5
  
//   function MaxValue (shares) {
//     // Your code here:                                //Complejidad
//     let arrSums = []                                  //1  
//     let index = shares.length -1                      //1
//     for(index; 0 <= index; index--){                  //n
//       for(let j = index; 0 <= j; j--){                //n^2
//         arrSums.push(shares[index]-shares[j])
//       }
//     }
  
//     let maxProfit = arrSums.reduce((ac, el)=>{
//       return Math.max(ac,el)
//     })
//     return maxProfit
//   }
  
  
//   console.log(MaxValue([4,3,2,5,11]));
//   //Output: 9 
//   console.log(MaxValue([23,7,3,4,8,6]));
//   // Output: 5
//   module.exports = MaxValue
  
  module.exports = MaxValue