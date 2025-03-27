import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingPageNavbar from "../components/LIstingPageNavbar/ListingPageNavbar";
function OwnerLayout() {
    return (
        <>
            <Header />
            <ListingPageNavbar/>
            <Outlet />
            <Footer />
        </>
    )
};
export default OwnerLayout;