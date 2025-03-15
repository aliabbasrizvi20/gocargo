import { Outlet } from "react-router";
import Header from "../components/Header";

function CarLayout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
            <div>Footer</div>
        </>
    )
};
export default CarLayout;