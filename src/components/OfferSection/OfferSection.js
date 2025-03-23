import bb from "../../assets/bb.jpg"
import "./style.css"
export default function OfferSection(){
    return(
<div className="offer-Container">
<div className="offer-section">
        <div className="offer-heading">
            <h3>Unmatched Offers</h3>
            <h6>Drive everywhere with freedom</h6>
        </div>
      
            <div className="offer-images">
                <img src={bb}></img>
                <img src={bb}></img>
                <img src={bb}></img>
                <img src={bb}></img>
            </div>
        
</div>

</div>
    );
}
