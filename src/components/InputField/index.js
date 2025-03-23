import { useState } from "react";
import "./InputField.css"
import LoginPopup from "../Popup";
function InputField({ type, placeholder, disabled, onChange, error, pattern,className, onClick  }) {
    const [internalError, setInternalError] = useState("");
// const  onInputChange = (e) => {
    
//     if(pattern){
//         const regex = new RegExp(pattern)
//        let isMatched = regex.test(e.target.value);
//        if(!isMatched) {
        
//           setInternalError("Email not valid!");
//        }
//        else {
//         setInternalError("");
//        }
//        onChange(e);
//     }
// }

    return (

        <div className="input-field-section">
            <div className="input-field-wrap">
                <input type={type} placeholder={placeholder} className={`form-control  ${className}`} onChange={onChange} disabled={disabled}></input>
                
            </div>
            {(error || internalError) && <div className="input-error">{error || internalError}</div>}
        </div>
    


    );
}

export default InputField;