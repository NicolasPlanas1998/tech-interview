function MaxValue(shares) {
    // Your code here:                                //Complejidad
    var arrSums = []; //1  
    var index = shares.length - 1; //1
    for (index; 0 <= index; index--) { //n
        for (var j = index; 0 <= j; j--) { //n^2
            arrSums.push(shares[index] - shares[j]);
        }
    }
    var maxProfit = arrSums.reduce(function (ac, el) {
        return Math.max(ac, el);
    });
    return maxProfit;
}
console.log(MaxValue([4, 3, 2, 5, 11]));
// output :9
console.log(MaxValue([23, 7, 3, 4, 8, 6]));
// output :5
module.exports = MaxValue;
