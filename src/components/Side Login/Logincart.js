import { Navigate, useNavigate } from "react-router";
import "./style.css";
import CarData from "../Viewcar/Cardata";
import CarDetails from "../CarLists/CarDetails";

// import { useNavigate } from "react-router";
export default function Logintocheckout({car}){
    // const navigate=useNavigate();
    // function onClick(){
    //     navigate("/")
    // }
    console.log(car);
    const navigate=useNavigate();
    function onClick(){
        navigate("/login");
    }
    return(
        <div className="Car-info">
             <div className="Price">
             <div className="rating-box">
                    <p>4.5/5</p>
                </div>
               <h5>Total Price</h5> <span id="Crossed-price">$200</span>
                
                <p id="Offer-price">{car.price.selling_price}</p>
               
               <button onClick={onClick}>LogIn to Continue</button>
             </div>
        </div>

    );
}