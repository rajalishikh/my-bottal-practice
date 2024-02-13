import './Bottle.css';
const Bottle = ({ bottle2,handleClickName }) => {
    
    const { img,price } = bottle2;
    return (
        <div className="bottle">
            <p>My bottle picture </p>
            <img src={img} alt="it is a bottle picture" width={300} />
            <p>price : {price}</p>
            <button onClick={()=>handleClickName(bottle2)}>Purchase</button>
            
        </div>
    );
};

export default Bottle;
