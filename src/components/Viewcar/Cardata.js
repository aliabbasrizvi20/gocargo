import "./index.css"
import Logintocheckout from "../Side Login/Logincart";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Button from "../Button";
import BackButton from "../BackButton/BackButton";
export default function CarData({ Banner, Images, Host, Detail, Des,Price,car }) {

    console.log(Images);
const navigate=useNavigate();

    return (

        <div className="container">

            <div className="side-content-holder">
                <div className="little">
                    <BackButton
                    
                    />
                    {/* <Button onClick={()=>navigate(-1)}>&lt;Back</Button> */}
                </div>
                <div className="image-container">

                    <div className="banner-image">

                        <img src={Banner} />
                    </div>
                    <div className="side-images">
                        {/* <div className="more-img"> */}
                        {
                            // Images.map( url => <img src={url} />)
                            Images.slice(0,4).map(function (url) {
                                return <img src={url} />
                            })
                        }
                    

                        {/* </div> */}

                        {/* <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img1} />
                    <img src={Img2} /> */}
                    </div></div>
                {/* 
                
                    <div className="more-img2">
                        <img src={Img3} />
                        <img src={Img4} />   </div></div> */}


                <div className="Des">
                    <h6>Hosted By {Host}</h6>
                    <h3>{Detail}</h3>
                    <h6>{Des}</h6>
                    <h5>{Price}</h5>
                </div></div>

            <div className="right-continer">

                <Logintocheckout 
                car={car}
                
                
                />
                    {/* // sellprice={Price.selling_price} */}
            
            </div>
        </div>


    );


}