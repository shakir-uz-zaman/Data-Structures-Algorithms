const containsDuplicate=(nums)=>{
    let set = new Set(nums);
    return set.size !== nums.length;

}

let nums = [1,2,3,4];
console.log(containsDuplicate(nums));