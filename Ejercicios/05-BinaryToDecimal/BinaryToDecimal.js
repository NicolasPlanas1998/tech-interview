function BinaryToDecimal (binary) {
  let binaryLength = binary.length
  console.log(binaryLength);
  let arrBinary = binary.split("")
  console.log(arrBinary);

  let sum = 0
  for (let i = arrBinary.length-1; i >= 0; i--) {
    let index = (arrBinary.length - i -1); 
    sum += (Math.pow(2,i)* arrBinary[index])
  }
  return sum
}


    console.log(BinaryToDecimal("1010"));
    // expect 2
    console.log(BinaryToDecimal("1011")); 
    console.log(BinaryToDecimal("10101")); 
    // expect 7