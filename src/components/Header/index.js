import "./Header.css";
import car from "../../assets/car.svg";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/auth/authSelector";

function Header() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img src={car} className="site-icon" alt="Site Icon" />
                </a>
                {/* Toggler for smaller screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar content with flexbox for right alignment */}
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Become a Host</a>
                        </li>
                    </ul>

                    {/* Right-aligned Login link */}
                    <ul className="navbar-nav ms-auto fs-5 ">
                        <li className="nav-item ">
                            <a className="nav-link text-success border border-success rounded-start" href="http://localhost:3000/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
