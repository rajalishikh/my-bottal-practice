import PropTypes from 'prop-types';
import './cart.css';
const Cart = ({ bottalN }) => {
    
    return (
        <div >
            <p>newCart {bottalN.length}</p>
            <p>Id {bottalN. id}</p>
            <div className='cart'>
            {
                    bottalN.map(item3 =>
                        
                        <img key={item3.id} src={item3.img} width={150}></img>)
            }

            </div>
            
        </div>
    );
};
Cart.propTypes = {
    bottalN: PropTypes.array.isRequired
}
export default Cart;