import './Bottle.css';
const Bottle = ({ bottle2 }) => {
    console.log(bottle2)
    const { img } = bottle2;
    return (
        <div className="bottle">
            <p>My bottle picture </p>
            <img src={img} alt="it is a bottle picture" width={300} />
            
        </div>
    );
};

export default Bottle;
