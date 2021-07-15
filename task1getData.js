getData = () => { 
    let price = Math.floor(Math.random() * 2000); 
    let time = Math.random() * 2000; 
    console.log('Loading item. Will wait ' + time.toFixed(0)+'ms. Price: ' + price); 
    return new Promise((resolve) => { 
            setTimeout(() => { 
            resolve({price}); 
            }, time); 
        }); 
    };

// create 12 Promises, and wait for result from each of them, and only then return array of Promises

async function createPromises() {
    const priceList = [];
    
    for (let _ = 0; _ < 12; _++) {
        const price = await getData();
        priceList.push(price);
    }
    return priceList;
}

// since arr.sort() sorts values as string, this method implemented to compare as numbers

function comparePrices(price1, price2) {
    return price1.price - price2.price;
  }

// call for every value of priceList

function sumPrices(total, price) {
    return total + price.price;
}

createPromises()
.then((priceList) => {
    console.log(priceList.sort(comparePrices));
    console.log('Total price: ' + priceList.reduce(sumPrices, 0));
});
