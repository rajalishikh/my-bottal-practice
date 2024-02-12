import { useEffect, useState } from "react";
import Bottle from "../bottles/Bottle";
import './Header.css';


const Header = () => {
    const [bottle, setBottle] = useState([]);

    useEffect(() => {
        fetch('bottal.json')
            .then(res => res.json())
            .then(data => setBottle(data))
        
    },[])

    return (
        <div className="">
            <h2>Here is my Bottle part </h2>
            <p>The total bottle of website {bottle.length}</p>
            <div className=" bottle-container">
            {
                bottle.map(item=> <Bottle key={item.id} bottle2={item}></Bottle>)
            }
           </div>
            
        </div>
    );
};

export default Header;