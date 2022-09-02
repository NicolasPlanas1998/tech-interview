function MaxValue (shares:number[]):number  {
   // Your code here:                                //Complejidad
    let arrSums:number[] = []                                  //1  
    let index:number = shares.length -1                      //1

    for(index; 0 <= index; index--){                  //n
      for(let j = index; 0 <= j; j--){                //n^2
        arrSums.push(shares[index]-shares[j])
      }
    }
  
    let maxProfit:number = arrSums.reduce((ac, el)=>{
      return Math.max(ac,el)
    })
    return maxProfit
  }
  

  console.log(MaxValue([4, 3, 2, 5, 11]));
  // output :9
  console.log(MaxValue([23, 7, 3, 4, 8, 6]));
  // output :5
  
  
  module.exports = MaxValue