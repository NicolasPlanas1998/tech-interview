// Write a function, which takes a non-negative integer (seconds) 
// as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    // let HH = 0
    // let MM = 0
    // let SS = 0
    let time = [0,0,0]

   console.log(time);
    
    while(seconds>=60){
        seconds = seconds- 60
        time[2] = seconds
        time[1]++
        // if(seconds> 60){
        //     seconds = seconds/60
        //     HH = seconds
        //     MM = (HH - Math.floor(HH)) * 60
        //     SS = (MM - Math.floor(MM)) * 60
        // }else{
        //     MM = seconds
        //     SS = (MM - Math.floor(MM)) * 60
        // }
    }
    while(time[1] >= 60){
        time[1] = time[1] - 60 
        time[0]++
    }
    time.forEach(el=>{
        if(el.length >= 1) `0${el}`
        else el
    })

    console.log(time);
    // return `${HH}:${MM}:${SS}`;
  }

//   console.log(humanReadable(0));  // 00:00:00
  console.log(humanReadable(59)); // 00:00:59
  console.log(humanReadable(60));// 00:01:00
  console.log(humanReadable(45296));// 12:34:56