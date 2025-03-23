import { useState } from "react";
import cross from "../../assets/cross.png"
import check from "../../assets/check.png"
import Button from "../Button";
import "./index.css"
import { Link } from "react-router";
import InputField from "../InputField";
import { Navigate, useNavigate } from "react-router";
import Popup from "../Popup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth/authAction";
export default function Login() {
   
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [showPopup, setShowPopup] = useState(false);
        const [successPopup, setSuccessPopup] = useState(false);
    
        const onEmailChange = (e) => {
            setEmail(e.target.value);
        };
        const onPasswordChange = (e) => {
            setPassword(e.target.value);
        };
        const onClose = (e) => {
            setShowPopup(false);
        };
        const onClick = (e) => {
            e.preventDefault();
            if (email === "" || password === "") {
                setShowPopup(true);
                return;
            }
            dispatch(loginUser({ email, password }));
        };
        const isFormValid = email !== "" && password !== "";
    
        return (
            <div className="holder d-flex justify-content-center">
                {/* Apply Bootstrap Grid classes for responsiveness */}
                <div className="login-form">
                    <div className="text-data"></div>
                    <div className="data-field">
                        <h2>Login</h2>
                        <InputField
                            type="text"
                            placeholder="Enter Email"
                            onChange={onEmailChange}
                            pattern={'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'}
                        />
                        <InputField type="password" placeholder="Enter Password" onChange={onPasswordChange} />
                        <Button onClick={onClick}>Login</Button>
                        {showPopup && <Popup
                            image={cross}
                            heading="Sorry"
                            subHeading="Please enter a valid email"
                            className="red-btn"
                            buttonText="OK"
                            onClose={() => setShowPopup(false)}
                        />}
                        {successPopup && <Popup
                            image={check}
                            heading="Success"
                            subHeading="You Have Successfully Created Your Account"
                            buttonText="OK"
                            className="green-btn"
                            onClose={() => setSuccessPopup(false)}
                        />}
                    </div>
                    <div className="sign">
                        <p>New To Gocargo?</p><Link to="/signup">SignUp</Link>
                    </div>
                </div>
            </div>
        );
    }    