import './mobile.css'
const mobile= props =>
(
   
    <div className="mobile col-sm-4"> 
    
        <h1>Mobile: {props.MobileName}</h1>
        <p><i>Name: {props.name}</i></p>
        <p><i>Manufacturer:{props.manufacturer}</i></p>
        <p><i>Price: {props.price}</i></p>
        <p><i>RAM: {props.ram}</i></p>
        <p><i>Color:{props.color}</i></p>
    </div>
);
export default mobile;