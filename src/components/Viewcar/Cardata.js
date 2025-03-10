import "./index.css"
import Logintocheckout from "../Side Login/Logincart";
export default function CarData({ Banner, Images, Host, Detail, Des }) {
    console.log(Images)
    return (
        <div className="container">
            <div className="side-content-holder">
            <div className="image-container">
                <div className="banner-image">
                    
                        <img src={Banner} />
                    </div>
                    <div className="side-images">
                    <div className="more-img">
                 {
                    // Images.map( url => <img src={url} />)
                    Images.map(function(url){
                        return <img src={url} />
                    })
                 }
               
                 </div>
                 <div className="blank-container">
                <h1>lkajfla</h1>
                   </div>
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
                </div></div>
            
            <div className="right-continer">
               <Logintocheckout/>
            </div>
        </div>
    );


}