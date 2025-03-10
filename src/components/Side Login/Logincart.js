import { Navigate, useNavigate } from "react-router";
import "./style.css";
// import { useNavigate } from "react-router";
export default function Logintocheckout(){
    // const navigate=useNavigate();
    // function onClick(){
    //     navigate("/")
    // }
    const navigate=useNavigate();
    function onClick(){
        navigate("/login");
    }
    return(
        <div className="Car-info">
             <div className="Price">
               <h5>Total Price</h5> <span id="Crossed-price">$200</span>
                <p id="Offer-price">$50</p>
               <button onClick={onClick}>LogIn to Continue</button>
             </div>
        </div>

    );
}