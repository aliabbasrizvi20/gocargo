import { useState } from "react";
import cross from "../../assets/cross.png"
import check from "../../assets/check.png"
import Button from "../Button";
import "./index.css"
import { Link } from "react-router";
import InputField from "../InputField";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";
import Popup from "../Popup";
import { API } from "../../helpers/requests";
export default function Login() {
    const navigate = useNavigate();
    // const [login, setLogin]=useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
     const [showPopup, setShowPopup] = useState(false);
     const [successPopup, setSuccessPopup] = useState(false);
    // const [showTickPopup, setTickPopup]=useState("");
    //  const[successPopup, setSuccessPopup]=useState("");
    // const [popupHeading,setPopupHeading]=useState("");
    // const[popupSubHeading,setPopupSubHeading]=useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);

    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const onClose = (e) => {
        setShowPopup(false)
    }
    const onClick = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            //    setPopupHeading("Sorry")
            //    setPopupSubHeading("Please Enter A Valid Email");
            setShowPopup(true);
            return;
        }
        API.post("/auth/login", {
            email: email,
            password: password,
        })
          .then((response) => {
            console.log(response)
            // setSuccessPopup(true);
            navigate("/")
    if (response.response.status === 400) {
        console.log("error");
        
    }
   
}).catch(()=>{
    setShowPopup(true);

})

                // setSuccessPopup(true);
                // console.log(response);
                // setPopupHeading("Success")
                // setPopupSubHeading("Your Account Is Created")
                // setShowPopup(false);
                // setSuccessPopup(true);
                // console.log(successPopup);
                // console.log(`Welcome Back ${email}`)
                // navigate("/");

    
    }
    const isFormValid = email !== "" && password !== "";

    return (
        <div className="holder">
            <div className="login-form">
                <div className="text-data">

                </div>
                <div className="data-field">
                    <h2>Login</h2>
                    <InputField
                        type="text" placeholder="Enter Email" onChange={onEmailChange} pattern={'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'} />
                    <InputField type="password" placeholder="Enter Password" onChange={onPasswordChange} />
                    {/* <input type="email" placeholder="Enter Email "></input> */}
                    {/* <input type="password" placeholder
                        ="Enter Mobile Number "></input> */}
                    {/* <InputField onChange={onNameChange} /> */}
                    <Button onClick={onClick}>Login</Button>
                    {/* {showPopup && !successPopup && ( <LoginPopup */}
                    {/* //  heading={setPopupHeading}
                        //  subHeading={setPopupSubHeading} */}
                     {showPopup && <Popup
                        image={cross}
                        heading="Sorry"
                        subHeading="Please enter a valid email"
                        className="red-btn"
                        buttonText="OK"
                        onClose={() => setShowPopup(false)}
                    />
                    }
                    {successPopup && <Popup
                        image={check}
                        heading="Success"
                        subHeading="You Have Successfully Created Your Account"
                        buttonText="OK"
                        className="green-btn"
                        onClose={() => setSuccessPopup(false)}
                    />
                    } 
                    {/* {showTickPopup && <LoginPopup
                        heading="Success"
                        subHeading="Please enter a valid email"
                                    buttonText="OK"     
                              onClose={()=>setShowPopup(false)}
                        />
                    }  */}
                    {/* {successPopup&&<LoginPopup
                     heading={setPopupHeading}
                     subHeading={setPopupSubHeading}
                     onClose={()=>setSuccessPopup(false)}
                    />} */}
                    {/* <LoginPopup
                        heading="Success"
                        subHeading="You Have Successfully Created Your Account"
                    
                    /> */}

                </div>
                <div className="sign">
                     {/* <p>New To GoCarGo?</p><a href="http://localhost:3000/signup"><h6>SignUP</h6></a> </div> */}
                     
                     <p>New To Gocargo?</p><Link to="/signup">SignUP</Link> </div>
            </div>
        </div>
    );
}
