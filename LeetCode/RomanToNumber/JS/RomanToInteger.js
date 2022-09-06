// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

var romanToInt = function(s) {
    var romansValue = new Map()
        romansValue.set("I",1)
        romansValue.set("V",5)
        romansValue.set("X",10)
        romansValue.set("L",50)
        romansValue.set("C",100)
        romansValue.set("D",500)
        romansValue.set("M",1000) 
    let arrayRoman = s.split("")
    let sum = 0
    for (let index = 0; index < arrayRoman.length; index++) {
        arrayRoman[index]
        if(arrayRoman[index] === "I" && (arrayRoman[index + 1] === "V" || arrayRoman[index + 1] === "X")) sum -= romansValue.get(arrayRoman[index])
        else if(arrayRoman[index] === "X" && (arrayRoman[index + 1] === "L" || arrayRoman[index + 1] === "C")) sum -= romansValue.get(arrayRoman[index])
        else if(arrayRoman[index] === "C" && (arrayRoman[index + 1] === "D" || arrayRoman[index + 1] === "M")) sum -= romansValue.get(arrayRoman[index])
        else sum += romansValue.get(arrayRoman[index])
        
    }
    return sum
    
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));