import PropTypes from 'prop-types';
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
Bottle.propTypes = {
    bottle2: PropTypes.object.isRequired,
    handleClickName:PropTypes.func.isRequired
    
}
export default Bottle;
