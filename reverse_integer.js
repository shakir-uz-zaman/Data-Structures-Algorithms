// 123= 321
// 120 = 21
// -3456 =-6543

function reverse(x)
{   
    
    let res=0;
    let count =0;
    let position=0;
    let base_value=10;
    let negative = false;
    if(x<0)
    {
        negative =true ; 
        x= 0-x;
    }
    if(x==0)
    {
        return x;
    }
    while(x>0)
    {
        res = res*10 + x%10;
        x=parseInt(x/10);
      
    } 
    if(negative)
    {
        res =0-res;
    }
    if(x < -2147483648 || x>2147483648 || res <-2147483648 || res>2147483648)
    {
        return 0;
    }
    return res;
    
}

console.log(reverse(1));