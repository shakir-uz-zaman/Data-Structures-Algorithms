const price1=[7,6,4,3,1];
const price2=[1,2,3,4,5];

const maxPrice=(prices)=>{
    let profit=0, priceLength=prices.length-1;
    for(let day=0;day<priceLength;day++){
        const possibleProfit=prices[day+1]-prices[day];
        profit=(profit+possibleProfit)>profit?(profit+possibleProfit):profit;

    }
    return profit;
};
console.log(maxPrice((price2)));
