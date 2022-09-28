function fizzBuzz(x,y){
    let arrFizzBuzz = []

    while(y >= x){
        let multipleThree = x%3
        let multipleFive  = x%5
        if(multipleThree === 0 && multipleFive ===0) arrFizzBuzz.push("FizzBuzz")
        else if( multipleThree === 0)arrFizzBuzz.push("Fizz")
        else if( multipleFive === 0)arrFizzBuzz.push("Buzz")
        else arrFizzBuzz.push(x)
        x++
    }
    return arrFizzBuzz
}

console.log(fizzBuzz(0,3));


