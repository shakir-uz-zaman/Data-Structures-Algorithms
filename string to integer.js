const myAtoi = function(s) {
    let position=0;
    let sign=1;
    let res=0;
    let len=s.length-1;
    const INT_MAX=2147483647;
    const INT_MIN= -INT_MAX-1;

    while(s[position]===" ") position++;

    if(s[position]=== "+" || s[position]=== "-"){
        sign = s[position]=== "+" ? 1 : -1;
        position++;
    }
    while(s[position]>='0' && s[position]<='9'){
        res= res * 10 + (s[position] - 0);
        if(sign === 1 && res > INT_MAX) return INT_MAX;
        if(sign === -1 && res > INT_MAX + 1) return INT_MIN;  
    position++;
    }
    return res * sign;

};

let s= "4193 with words";
console.log(myAtoi(s));