var lengthOfLongestSubstring = function(s) {
    let bestOption = ''
    let loop = true

    for (let i = 0; i < s.length; i++) {    
        let j = i
        let result = ''
        while(loop){
            j++
            result = s.substring(i, j)
            if(result.includes(s[j])) loop = false
            else if(j === s.length) loop = false
        }
        if(bestOption < result.length) bestOption = result.length
        loop = true
    }
    return bestOption
};
