const Sunglass = ({ student }) => {
    const{ name,price,id}=student
    return (
        <div>
            <p>My phone name is { name}</p>
            <p>My phone price  is { price}</p>
            <p>My  id is { id}</p>
            
        </div>
    );
};

export default Sunglass;