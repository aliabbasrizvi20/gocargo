    import { useState } from "react";
    import Button from "../Button";
    import "./index.css"
    import InputField from "../InputField";
    import { Navigate, useNavigate } from "react-router";
    export default function Login() {
        const navigate=useNavigate();
        const [password, setPassword]=useState("");
        const [email, setEmail] = useState("");
        const onEmailChange = (e) => {
            setEmail(e.target.value);
            
        };
        const onPasswordChange =(e)=>{
            setPassword(e.target.value);
        };
            function onClick(){
            if(password==="1234" && email==="abcd@gmail.com") 
            {
                navigate("/")
            }
            else{
                console.log("Wrong")
            }
            }

        return (
            <div className="holder">
                <div className="login-form">
                    <div className="text-data">

                    </div>
                    <div className="data-field">
                        <h2>Login</h2>
                        <InputField type="text" placeholder="Enter Email" onChange={onEmailChange} />
                        <InputField type="password" placeholder="Enter Password" onChange={onPasswordChange} />
                        {/* <input type="email" placeholder="Enter Email "></input> */}
                        {/* <input type="password" placeholder
                        ="Enter Mobile Number "></input> */}
                        {/* <InputField onChange={onNameChange} /> */}
                        <Button onClick={onClick}>Login</Button>

                    </div>
                    <div className="sign">
                    <p>New To GoCarGo?</p><a href="http://localhost:3000/signup"><h6>SignUP</h6></a></div>
                </div>
            </div>
        );
    }
