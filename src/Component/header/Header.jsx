import { useEffect, useState } from "react";


import { addLs, getStoreCart } from "../../utility/getstorecart";
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
            console.log(loadData)
            
            
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
            <p>newCart { bottalN.length}</p>
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