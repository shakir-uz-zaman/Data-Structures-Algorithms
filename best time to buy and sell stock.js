const price1=[7,6,4,3,1];
const price2=[7,1,5,3,6,4];

const maxPrice=(price)=>{
    let min=price[0],profit=0, priceLength=price.length-1;
    for (let i=0;i<priceLength;i++){
        min = Math.min(min,price[i]);
        profit=Math.max(profit,price[i+1]-min);
    }
    return profit;
};
maxPrice((price1));
