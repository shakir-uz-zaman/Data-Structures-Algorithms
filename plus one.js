const plusOne=(digits)=>{
    for(let position=digits.length-1;position>=0;position--)
    {
        ///if position is 9 and

        //if not 9
        if(digits[position]===9){
            digits[position]=0;
        }
        else{
            digits[position]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;

}

let nums=[9,9,9,9,9];
console.log(plusOne(nums));