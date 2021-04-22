const moveZeroes=(nums)=>{
    let pointer=0;
    for(let position=0;position<nums.length;position++){
        if(nums[position]!==0) {
            nums[pointer++]=nums[position];
        }
    }
    // console.log(nums);
    // while(pointer<nums.length){
    //     nums[pointer++]=0;
    // }
    nums.fill(0,pointer,nums.length);
    return nums;
}
let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));
