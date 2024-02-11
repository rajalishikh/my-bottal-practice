
import { useEffect, useState } from 'react';
import Sunglass from '../Sunglass/Sunglass';
import './country.css';
const Country = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('watches.json')
            .then(Response => Response.json())
            .then(data => setWatches(data));
    },[])

    
    
    return (
        <div>
           
            {
               watches.map(item => <Sunglass key={item.id} student={item}></Sunglass>)
                
            }
        
            
            
            
        </div>
    );
};

export default Country;