// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    //your code here
    let firstIndex = 0
    if(url.includes("www.")) firstIndex= url.indexOf("www.") + 4
    else if(url.includes("//")) firstIndex = url.indexOf("//") + 2

    let domain = url.slice(firstIndex, url.length) 
    let lastIndex = domain.indexOf(".")
    domain = domain.slice(0,lastIndex)


    return domain
}



  console.log(domainName("http://google.com"));     // "google"
  console.log(domainName("ntz4nu.tv/"));    
  console.log(domainName("http://www.zombie-bites.com"));    



//! Better solution
//   function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };