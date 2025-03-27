import "./index.css"
import CarDetails from './CarDetails'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { PUBLIC_API } from "../../helpers/requests";
import { getCoordinatesFromGoogle } from "../../helpers/methods";
import  Button from "../Button";
import BackButton from "../BackButton/BackButton";
function CarList() {
    const [list, setList] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const city = queryParams.get("location");
    useEffect(()=>{
        async function fetchCoords() {
            let coordinates = null
            if(city){
                coordinates = await getCoordinatesFromGoogle(city);
            }
            const url = city ? `/cars?lat=${coordinates.latitude}&long=${coordinates.longitude}` : "/cars";
            PUBLIC_API.get(url, {withCredentials: false}).then((res)=>{
                setList(res.data);
            })
        }
        fetchCoords();
    },[]);
    // function carsList(){
    //     navigate("/car/67bac72d20708f404bda2ca0")
    // }

    
     return (
        <div className="main-holder">
            <h1 className="txt">Top Cars In India</h1>

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