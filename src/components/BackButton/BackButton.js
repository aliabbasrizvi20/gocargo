import { useNavigate } from "react-router";

function BackButton({BackButton}){
    const navigate=useNavigate();  
    return(
            
        <button onClick={BackButton=()=>navigate(-1)}>Go Back</button>

    );
}
export default BackButton;