let romanToInt = function romanToInt (s:string):number {


    let romansValue = new Map()
        romansValue.set("I",1)
        romansValue.set("V",5)
        romansValue.set("X",10)
        romansValue.set("L",50)
        romansValue.set("C",100)
        romansValue.set("D",500)
        romansValue.set("M",1000) 
    let arrayRoman:string[] = s.split("")
    let sum:number = 0
    for (let index = 0; index < arrayRoman.length; index++) {
        arrayRoman[index]
        if(arrayRoman[index] === "I" && (arrayRoman[index + 1] === "V" || arrayRoman[index + 1] === "X")) sum -= romansValue.get(arrayRoman[index])
        else if(arrayRoman[index] === "X" && (arrayRoman[index + 1] === "L" || arrayRoman[index + 1] === "C")) sum -= romansValue.get(arrayRoman[index])
        else if(arrayRoman[index] === "C" && (arrayRoman[index + 1] === "D" || arrayRoman[index + 1] === "M")) sum -= romansValue.get(arrayRoman[index])
        else sum += romansValue.get(arrayRoman[index])
        
    }
    return sum
    
};

