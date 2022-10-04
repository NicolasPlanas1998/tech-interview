// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing 
// a poker card in the format "5H" (5 of hearts), meaning the value of the
//  card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false


//!------  Option 1 --------
// function isFlush(cards) {

//     let [S,H,D,C] = [0,0,0,0]
//     cards.forEach(element => {
//         if(element.includes("S")) S++
//         if(element.includes("H")) H++
//         if(element.includes("D")) D++
//         if(element.includes("C")) C++
        
//     });
//     if(S === 5 ||D === 5 ||H === 5 |C === 5 ) return true
//     else return false
//   }



//!------  Option 1 --------
const isFlush = a =>{
    a.every(val => val.slice(-1) === a[0].slice(-1));
}


console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ]));