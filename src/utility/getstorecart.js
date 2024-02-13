const getStoreCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storeCartString) {
        return JSON.parse(storeCartString);
    }
    return [];
}

const saveCard = cart => {
    const saveCardString = JSON.stringify(cart)
    localStorage.setItem('cart', saveCardString);
}

const addL = (id) => {
    const addLocalStorage = getStoreCart();
    addLocalStorage.push(id);
    // save the cart 
    saveCard(addLocalStorage);
}
export { addL };
