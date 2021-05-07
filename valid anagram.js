const isAnagram = function (s, t) {
    if(s.length!==t.length) return false;
    let map={};
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            map[s[i]]++;
        }else{
            map[s[i]]=1;
        }
    }
    for(let i=0;i<t.length;i++){
        if(map[t[i]] && map[t[i]]>0)
        {
            map[t[i]]--;
        }
        else return false;
    }
    for(let key in map){
        if(map[key]!==0) return false;
    }
    return true;
  };

let s="earth",t="heart";
console.log(isAnagram(s,t));