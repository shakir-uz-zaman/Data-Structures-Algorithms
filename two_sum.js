 const nums = [2,4,7,15]

function twoSum(nums, target) {
  let comp = new Map();
  for(let i=0;i<nums.length;i++){
    console.log(comp[i],i);
    if(comp[nums[i]]>=0) {
      return [comp[nums[i]],i];
    }
    else{
      comp[target-nums[i]] = i;
    }
  }
}
console.log(twoSum(nums, 11))
