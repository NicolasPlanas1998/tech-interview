// Implement the function unique_in_order which takes as argument a sequence and returns a list 
// of items without any elements with the same value next to each other and preserving 
// the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//? Opcion 1 

var uniqueInOrder=function(iterable){
    if(!iterable.length) return []
    else{
        let newSequence = [iterable[0]]
        for (let i = 1; i < iterable.length; i++) {
            if(iterable[i-1] !== iterable[i]) newSequence.push(iterable[i])
        }
        return newSequence
    }
    //your code here - remember iterable can be a string or an array
  }





//? Opcion 2


var uniqueInOrder=function(iterable){
    return [...iterable].filter((element,index)=> element !== iterable[index-1])
    //your code here - remember iterable can be a string or an array
}
console.log(uniqueInOrder('asssdasd'));