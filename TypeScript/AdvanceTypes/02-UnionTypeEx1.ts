
/*  A variable or function can be any types, in below example exchange rate can be either string or number */
function usdToInr(exchangeRate: number | string, usd: number) : number {
    // below line is called narrowing
    if (typeof exchangeRate === 'number'){
        return exchangeRate*usd;
    }else {
        return parseInt(exchangeRate)*usd;
    }
}


console.log("Union example passing number, number : converting 20 usd to INR at rate of of (1 USD = 88 INR)",usdToInr(88,10))
console.log("Union example passing string, number : converting 20 usd to INR at rate of of (1 USD = 88 INR)",usdToInr("88",5))