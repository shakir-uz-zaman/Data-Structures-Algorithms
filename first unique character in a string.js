s = "abcdeabd";

const char=(s)=>{
   let freq= {};                                                
   for(let i=0;i<s.length;i++){
       if(freq[s[i]])
       {
           freq[s[i]]++;
       }
       else{
           freq[s[i]]=1;
       }
   }

   for(let key of Object.keys(freq)){
       if(freq[key]===1){
           return s.indexOf(key);
       }
   }
  return -1;

}
console.log(
    char(s));