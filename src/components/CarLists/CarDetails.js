import { Navigate, useNavigate } from "react-router";
import "./index.css"
export default function CarDetails({ Image, Name, Price, Description, id }) {  
const navigate=useNavigate();
    function onClick(){
    navigate("/car/"+id)
}
    return (
      

        <section onClick={onClick} className="car">
            <div className="image">
                <img src={Image} img /></div>
            <div className="content">
                <p>{Name}</p>
                <p>{Price}</p>
                <p>{Description}</p>
            </div>
        </section>

    );
}