// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
function rowSumOddNumbers(n) {
	// TODO
    let row = 1
    let triangle = []
    let lastIndex = 1

    while(n>=row){
        let nRow = []
        if(lastIndex !== 1){
           for (let i = 1; i <= row; i++) {
               nRow.push(lastIndex)
               lastIndex += 2
           }
       }else nRow.push(lastIndex)
    
    triangle.push(nRow)
    lastIndex = nRow[nRow.length-1] + 2
    row++
}
result = triangle[n-1].reduce(function(ac,el){
    return ac + el
})
return result

}
// Otra solución más eficientes es :
// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
//   }

console.log(rowSumOddNumbers(42));
