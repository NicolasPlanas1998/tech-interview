function HasBalancedBrackets (string) {
  // Your code here:
  // const open = ['{','[','(']
  // const close = ['}',']',')']
  // const stringToArray = string.split('')
  // // stringToArray.forEach(el=>{
  // //   el 
  // // })
  // for(let i =0; stringToArray.length > i; i++){
  //   let bracket = stringToArray[i]
  // }


}
let a = 'asd1asd1'
console.log(a.length);
let bool = true
while(bool){
  a = a.replace(1,2)
  bool = a.includes(1) 
}
console.log(a);

if("[" === "[") console.log(true);

module.exports = HasBalancedBrackets

console.log(HasBalancedBrackets('{[]()}'))            //(true)
console.log(HasBalancedBrackets('{[]}}')  )            //(false)
console.log(HasBalancedBrackets('{[([{()[]{}}])]}'))   //(true)
console.log(HasBalancedBrackets('{[(])}') )            //(false)
console.log(HasBalancedBrackets('{[('))               //(false)