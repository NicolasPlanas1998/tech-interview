const {domainName} = require("../CodeWar/DomainName")

describe('Testing domain name', () =>{
    it("should return just the domain",()=>{
        expect(domainName("http://google.com")).toBe("google")
    })
  })