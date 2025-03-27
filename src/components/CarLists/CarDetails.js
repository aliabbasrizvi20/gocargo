import { Navigate, useNavigate } from "react-router";
import "./index.css"
import Button from "../Button";
export default function CarDetails({ Image, Name, Price, Description, id, showButton, browseCarsButton }) {
    const navigate = useNavigate();
    function onClick() {
        navigate("/car/" + id)
    }
    return (


        <section onClick={onClick} className="car">
            <div className="image">
                <img src={Image} img /></div>
            <div className="content">
                <p>{Name}</p>
                <p>{Price}</p>
                <p>{Description}</p>
                <div className="cars-buttons">
                    {showButton && <Button
                        className="edit-button"
                    >Edit</Button>
                    }
                    {showButton && <Button
                        className="del-button"
                    >Delete</Button>
                    }
                </div>
                
            </div>
        </section>

    );
}