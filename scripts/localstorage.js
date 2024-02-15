

const savelocalStorage = (digimon, money) => {

    let item = getlocalStorage();
    let price = getlocalStoragePrice()


    if (!item.includes(digimon)) {
        item.push(digimon);
        price.push(money)
    }

    localStorage.setItem("Item", JSON.stringify(item))
    localStorage.setItem("Price", JSON.stringify(price))
}

const getlocalStorage = () => {

    let localStorageData = localStorage.getItem("Item")

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);
}

const getlocalStoragePrice = () => {

    let localStorageData = localStorage.getItem("Price")

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);
}


const removeFromLocalStorage = (digimon) => {

    let item = getlocalStorage();
    let price = getlocalStoragePrice();


    let namedIndex = item.indexOf(digimon);

    item.splice(namedIndex, 1);
    price.splice(namedIndex, 1);

    localStorage.setItem("Item", JSON.stringify(item));
    localStorage.setItem("Price", JSON.stringify(price));
}

















const savelocalStorageBudget = (digimon) => {

    localStorage.setItem("Budget", JSON.stringify(digimon))
}

const getlocalStorageBudget = () => {
    let localStorageData = localStorage.getItem("Budget")

    if (localStorageData == null) {
        return 0;
    }
    return JSON.parse(localStorageData);
}




export { savelocalStorage, getlocalStorage, removeFromLocalStorage, savelocalStorageBudget, getlocalStorageBudget, getlocalStoragePrice };