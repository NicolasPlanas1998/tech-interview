



var mergeTwoLists = function(list1, list2) {
    let finalList = list1.concat(list2)
    console.log(finalList);
    finalList.sort((a,b)=> a-b)
    return  finalList
};


console.log(mergeTwoLists([1,3,4],[2,3.5]));