import AddCar from "../../pages/owner/AddCar/index";
import CarDetails from "../CarLists/CarDetails";
import { Navigate, useNavigate } from "react-router";
import { PUBLIC_API } from "../../helpers/requests";
import { useEffect, useState } from "react";
import Button from "../Button";



export default function OwnerAddedCarList(){
   
    const [list, setList] = useState([]);
    useEffect(()=>{
        PUBLIC_API.get("/cars", {withCredentials: false}).then((res)=>{
            setList(res.data);
           
        })
    },[]);
    return(
        <div className="item-holder">
        {list.map(item => {
            return <>
             
            <CarDetails
            
                Image={item.images[0]}
                Name={item.name}
                Price={item.price.selling_price}
                Description={item.description}
                id={item._id}
                showButton={true}
               />
              
               
               </>
             
        })}
       
       </div>

    )}

       

  