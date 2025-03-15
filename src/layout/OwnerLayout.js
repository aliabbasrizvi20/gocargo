import { Outlet } from "react-router";
import Header from "../components/Header";

function OwnerLayout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
            <div>Footer</div>
        </>
    )
};
export default OwnerLayout;