import { useEffect, useState } from "react";

const Header = () => {
    const [bottle, setBottle] = useState([]);

    useEffect(() => {
        fetch('bottal.json')
            .then(res => res.json())
            .then(data => setBottle(data))
        
    },[])

    return (
        <div>
            <h2>Here is my Bottle part </h2>
            <p>The total bottle of website { bottle.length}</p>
            
        </div>
    );
};

export default Header;