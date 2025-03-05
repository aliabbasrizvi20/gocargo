import "./index.css"
import CarDetails from './CarDetails'
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
function CarList() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get('https://gocargo-1.onrender.com/cars').then((res)=>{
            setList(res.data);
            
        })
    });
    const navigate=useNavigate();
    // function carsList(){
    //     navigate("/car/67bac72d20708f404bda2ca0")
    // }
    //
    function onClick(){
        navigate(onClick.id);
    }
     return (
        <div className="main-holder">
            <h1 className="txt">Top Cars In Bangalore:</h1>

            <div className="item-holder">
                {list.map(item => {
                    return <CarDetails
                    
                        Image={item.images[0]}
                        Name={item.name}
                        Price={item.price.selling_price}
                        Description={item.description}
                        id={item._id}
                    />
                })}
            </div>
        </div>
    );
}
export default CarList;