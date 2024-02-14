const getStoreCart = () => {
    const storeCardString = localStorage.getItem('cart')
    if (storeCardString) {
        return JSON.parse(storeCardString)
    }
    return [];
}
// here is the function of save the data 

const saveData = cart2 => {
    const saveDataString = JSON.stringify(cart2);
    localStorage.setItem('cart', saveDataString);
    
}
// add the data 
const addLs = (id) => {
    const addData = getStoreCart()
    addData.push(id);
    // save the data 
    saveData(addData);


}
export { addLs, getStoreCart };
     