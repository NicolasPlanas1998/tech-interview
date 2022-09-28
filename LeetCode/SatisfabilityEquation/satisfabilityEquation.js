
// You are given an array of strings equations that represent relationships between variables where each string equations[i] 
// is of length 4 and takes one of two different forms: "xi==yi" or "xi!=yi".Here, xi and yi are lowercase letters 
// (not necessarily different) that represent one-letter variable names.

// Return true if it is possible to assign integers to variable names so as to satisfy all the given equations, or false 
// otherwise.
 
//? Example 1:
// Input: equations = ["a==b","b!=a"]
// Output: false
// Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
// There is no way to assign the variables to satisfy both equations.

//? Example 2:
// Input: equations = ["b==a","a==b"]
// Output: true
// Explanation: We could assign a = 1 and b = 1 to satisfy both equations.


var equationsPossible = function(equations) {
    // if(equations.length > 1){
    //     if(equations[0][1] === equations[1][1] )return true
    //     else return false
    // }else if(equations[0].includes("!")){
    //     console.log(equations[0][0],equations[0][3]);
    //     return equations[0][0] !== equations[0][3]
    // }

    // return true
    let equalArray =''
    let differentArray =[]

    equations.forEach(string => {
        if(string[1] === "!") differentArray.push([string[0],string[3]])
        else {
            // let newstring = [string[0],string[3]
            equalArray += string[0]
            equalArray += string[3]
        }

    });
    console.log(differentArray);
    console.log(equalArray);
    for (let i = 0; i < differentArray.length; i++) {
        console.log(i);
        console.log(differentArray[i][1]);
        if(differentArray[i][0] === differentArray[i][1]) return false
        if(equalArray.includes(differentArray[i][0]) && equalArray.includes(differentArray[i][1])) return false

        
    }
    return true
};

// console.log(equationsPossible(["a!=b"]));
console.log(equationsPossible(["a==b","e==c","b==c","f!=e"]))
console.log(equationsPossible(["e==e","d!=e","c==d","d!=e"]))
// igualdades e c d