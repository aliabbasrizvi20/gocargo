import { Navigate, useNavigate } from "react-router";
import Button from "../Button";
import "./index.css";
import ni from "../../assets/ni.jpg";
import blackcar from "../../assets/blackcar.jpeg";
import CarList from "../CarLists/carList";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import CarSection from "../Carsection";
import OfferSection from "../OfferSection/OfferSection";
export default function SearchCars() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [lastDate, setLastDate] = useState("");
    useEffect(() => {

        console.log("Welcome");
    }, []);
    function onSearchClick() {
        console.log(location);
        console.log(startDate);
        console.log(lastDate);
        navigate("/list");
    }
    const onLocationChange = (e) => {
        setLocation(e.target.value);
    }
    const onStartDateChange = (e) => {
        setStartDate(e.target.value);
    }
    const onLastDateChange = (e) => {
        setLastDate(e.target.value);
    }

    function onClick() {
        navigate("/list");
    }

    return (
       
       <section>
            <div className="SearchCar">
                <div className="content">
                    <div className="heading">
                        <h1>Search for cars in  <span className="highlight-city">bangalore</span></h1></div>
                    <div className="botton-container">
                        <div className="form-car">
                            <input type="text " className="txts" placeholder="Location" onChange={onLocationChange}></input>
                            <div className="trip-start">
                                <input type="date" placeholder="" onChange={onStartDateChange}></input>
                            </div>
                            <div className="trip-ends">
                                <input type="date" placeholder="" onChange={onLastDateChange}></input>
                            </div>
                            <div className="searchcar-btn">
                                <Button onClick={onSearchClick} className="searchtbtn">Search Cars</Button>
                            </div>
                        </div><div className="check">
                            <input type="checkbox"></input><span> Delivery & Pick-up, from anywhere</span>
                        </div>
                    </div></div>
            </div>
            <div className="car-list">
                <CarList />
                <div className="btn-btn-search">
                    <Button onClick={onClick}>Browse All Cars</Button>
                </div>
            </div> 
            <OfferSection/>
                <Footer /> 
                </section>
    );
}