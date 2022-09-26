
let findMedianSortedArrays = (nums1,nums2) =>{
    let mergeArr = nums1.concat(nums2)
    let media = mergeArr.length % 2

    mergeArr.sort((a,b)=>{
        return a-b
    });
    if(media){
        half = Math.round(mergeArr.length / 2) -1
        return(mergeArr[half])
    }else{
        upper = mergeArr.length / 2
        lower = upper - 1
        media = (mergeArr[upper] + mergeArr[lower]) / 2
        return media 
    }  
}



console.log(findMedianSortedArrays([1,2],[3,4]));