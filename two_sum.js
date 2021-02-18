 const nums = [2,4,7,15]

function twoSum(nums, target) {
  let comp = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
             return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
}
console.log(twoSum(nums, 9))
