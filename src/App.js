import { BrowserRouter, Route, Routes } from "react-router";
import CarList from "./components/CarLists/carList";
import SearchCars from "./components/SearchCars";
import CarLayout from "./layout/CarLayout";
import CarDetails from "./components/CarLists/CarDetails";
import CarProfile from "./components/Viewcar/Cardata";
import ViewCar from "./components/Viewcar/ViewCar";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";

export default function App() {
    return (
        <CarLayout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SearchCars />} />
                    <Route path="/list" element={<CarList />} />
                    <Route path="/car/:id" element={<ViewCar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    
                    
                </Routes>
            </BrowserRouter>
            
        </CarLayout>

    );
}