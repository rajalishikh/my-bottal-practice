import { useEffect, useState } from "react";


import { addLs, getStoreCart } from "../../utility/getstorecart";
import Cart from "../Cart/Cart";
import Bottle from "../bottles/Bottle";
import './Header.css';


const Header = () => {
    const [bottle, setBottle] = useState([]);
    const [bottalN, setBottleN] = useState([]);

    useEffect(() => {
        fetch('bottal.json')
            .then(res => res.json())
            .then(data => setBottle(data))
        
    }, [])

    // load data from cart 
    useEffect(() => {
        console.log(bottle.length)
        if (bottle.length) {
            const loadData = getStoreCart();
            // console.log(loadData)
            // console.log(bottle)
            const saveCart = [];
            console.log('save the cart', saveCart)
            
            // running the loop in store data 
            for (const id of loadData) {
                console.log(id)
                const BottalFind = bottle.find(item2 => item2.id === id);
                if (BottalFind) {
                    saveCart.push(BottalFind);
                }

            }
            
            setBottleN(saveCart)
        }
        
        
    },[bottle])
     
    const handleClick = (bottleNumber) => {
        console.log(bottleNumber)
        const newCart = [...bottalN, bottleNumber];
        setBottleN(newCart)
        addLs(bottleNumber.id)
      
       
       
        
    }

    return (
        <div className="">
            <h2>Here is my Bottle part </h2>
            <p>The total bottle of website {bottle.length}</p>
            <Cart bottalN={bottalN}></Cart>
            
            <div className=" bottle-container">

            {
                    bottle.map(item => <Bottle key={item.id}
                        handleClickName={handleClick}
                        
                        bottle2={item}></Bottle>)
            }
           </div>
            
        </div>
    );
};

export default Header;