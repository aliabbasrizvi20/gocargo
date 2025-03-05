import "./index.css"
export default function CarData({ Banner, Img1, Img2, Img3, Img4, Host, Detail, Des }) {
    return (
        <div className="container">
            <div className="left-container">
                <div className="Img-holder">
                    <div className="banners">
                        <img src={Banner} />
                    </div></div>

                <div className="more-img">
                    <img src={Img1} />
                    <img src={Img2} />
                    <div className="more-img2">
                        <img src={Img3} />
                        <img src={Img4} />   </div></div>


                <div className="Des">
                    <h6>Hosted By {Host}</h6>
                    <h3>{Detail}</h3>
                    <h6>{Des}</h6>
                </div>
            </div>
            <div className="right-continer">
                <h1>fjalfjoiajfoisjoi</h1>
            </div>
        </div>
    );


}