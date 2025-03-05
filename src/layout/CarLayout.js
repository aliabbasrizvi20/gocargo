import Header from "../components/Header";

function CarLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <div>Footer</div>
        </>
    )
};
export default CarLayout;