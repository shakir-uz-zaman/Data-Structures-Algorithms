const strStr = function(haystack, needle) {
if(needle.length===0) return 0;
    if(needle.length===0) return 0;
    for(let position =0;position<haystack.length-needle.length+1;position++){
        if(haystack[position]===needle[0]){
            let temp_position=position;
            for(let k=0;k<needle.length;k++){
                if(needle[k]!==haystack[temp_position]) break;
            }
           if(needle===haystack.substring(position,position+needle.length)) return position;
        }
    }

    return -1;


};
let haystack = "llo00pp00ppp0", needle = "ppp";
console.log(strStr(haystack,needle));