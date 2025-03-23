import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OwnerAddedCarList from "../components/OwnerAddedCarList/OwnerAddedCarList";

function OwnerLayout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
            <OwnerAddedCarList />
            <Footer />
        </>
    )
};
export default OwnerLayout;