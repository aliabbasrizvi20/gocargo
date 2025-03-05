import { useState } from "react";
import Button from "../Button";

import InputField from "../InputField";
export default function Signup() {
  

    return (
        <div className="holder">
            <div className="login-form">
                <div className="text-data">

                </div>
                <div className="data-field">
                    <h2>Sign-Up</h2>
                    
                    <input type="email" placeholder="Enter Email "></input>
                    <input type="password" placeholder="Enter Password"></input>
                    <input type="number" placeholder="Enter Mobile Number "></input>
                    
                    
                    <Button>Register</Button>

                </div>
            </div>
        </div>
    );
}
