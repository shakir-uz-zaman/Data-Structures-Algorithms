const validPalindrome=(s)=>{
    s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let right = s.length-1;
   for(i=0;i<s.length;i++){
        if(s[i]!==s[right]) return false;
        else{
            right--;
        }
    }
    return true;
}
let s="race a car";
console.log(validPalindrome(s));