import "./Header.css";
import car from "../../assets/car.svg";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../../store/auth/authSelector";
import { logoutUser } from "../../store/auth/authAction";
import  Button from "../Button";

function Header() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onLogout() {
    dispatch(logoutUser());
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <Link to="">
            {" "}
            <img src={car} className="site-icon" alt="Site Icon" />
          </Link>
        </a>
        {/* Toggler for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar content with flexbox for right alignment */}
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Become a Host
              </a> */}
              <Link to="/owner" className="text-muted text-decoration-none">
                Become a host
              </Link>
            </li>
          </ul>

          {/* Right-aligned Login link */}
          <ul className="navbar-nav ms-auto fs-5 ">
            <li className="nav-item ">
              {/* <Button onClick={onClick}>LogIn</Button> */}

              {!isAuthenticated && (
                <Button>
                <Link      
                //  background-color: #117A41; color: white; border: none;
                  to="/login"
                  className="nav-link text-success border border-success rounded-start text-white b-none " 
                >
                  LogIn
                </Link>
                </Button>
              )}
              {isAuthenticated && (
                <div className="d-flex-inline">
                  <span class="badge bg-primary text-bg-dark">{user.name}</span>
                  <Link
                    onClick={onLogout}
                    className="nav-link text-success border border-success rounded-start"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
