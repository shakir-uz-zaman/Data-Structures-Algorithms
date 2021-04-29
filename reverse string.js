const s =  ["H","a","n","n","a","h"];
const reverseString =(s)=> {
if(s.length===0) return s;
let left =0 ,right= s.length-1,temp;
while(left<right){
    temp=s[left];
    s[left++]=s[right];
    s[right--]=temp;

}
};

reverseString(s);