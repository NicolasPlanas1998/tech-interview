const {bouncingBall} = require("../CodeWar/BouncingBalls.js")


describe("Testing Bouncing ball",()=>{
    it("Should be a function",()=>{
        expect(typeof bouncingBall).toBe("function")
    })
    it("Should return positive numbers",()=>{
        expect(bouncingBall(2, 0.5, 1)).toBe(1)
        expect(bouncingBall(3.0, 1.0, 1.5)).toBe(-1)
    })
    
})