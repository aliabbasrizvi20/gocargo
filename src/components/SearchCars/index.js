import { Navigate, useNavigate } from "react-router";
import Button from "../Button";
import "./index.css"
import CarList from "../CarLists/carList";
import { useEffect, useState } from "react";
export default function SearchCars() {
    const navigate = useNavigate();
    const[location, setLocation]= useState("");
    const[startDate, setStartDate]=useState("");
    const[lastDate, setLastDate]=useState("");
    useEffect(()=>{
     
        console.log("Welcome");
    },[]);
    function onSearchClick () {
        console.log(location);
        console.log(startDate);
        console.log(lastDate);
        navigate("/list");
    }
    const onLocationChange=(e)=>{
        setLocation(e.target.value);
    }
    const onStartDateChange=(e)=>{
        setStartDate(e.target.value);
    }
    const onLastDateChange=(e)=>{
        setLastDate(e.target.value);
    }
   
    
        return (
        <>

        <div className="SearchCar">
            <div className="heading">
            <h1>Search for cars in bangalore</h1></div>
           <div className="botton-container">
            <div className="form-car">
            <input type="text " className="txts" placeholder="Location" onChange={onLocationChange}></input>
            <input type="date" placeholder="" onChange={onStartDateChange}></input>
            <input type="date" placeholder="" onChange={onLastDateChange}></input>
            <Button onClick={onSearchClick}className="searchtbtn">Search Cars</Button>
            
            
            </div><div className="check">
            <input type="checkbox"></input><span>   Delivery & Pick-up, from anywhere</span>
            </div>
            </div>

        </div><div className="car-list">
        <CarList/>
        </div>
       
        </>
    );


}