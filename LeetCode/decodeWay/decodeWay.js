var numDecodings = function(s) {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;
  
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    // console.log(a);
    
    for (let i = 2; i <= s.length; i++) {
        const a = s.slice(i - 1, i);  //1 2 (2)
        // last one digit
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1];
      }
  
      const b = Number(s.slice(i - 2, i));  // last two digits
      if (b >= 10 && b <= 26) {
        dp[i] += dp[i - 2];
    }
}
    return dp[s.length];
};

console.log(numDecodings("226"));
