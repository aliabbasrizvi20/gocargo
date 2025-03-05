import "./InputField.css"
function InputField({type, placeholder, disabled, onChange}) {

    
    return (
        <input type={type} placeholder={placeholder} onChange={onChange}></input>
    );
}

export default InputField;