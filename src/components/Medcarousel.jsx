//carousel
import { Link } from "react-router-dom";
import Med1 from '../assets/med2 (2).jpg'
import Med2 from '../assets/med2 (3).jpg'
import Med3 from '../assets/med2 (4).jpg'
import Med4 from '../assets/med4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";





const ImageCarousel = () => {
return (
<section className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Med1} alt="" className="d-block w-100" height="500px" />
                </div>

                <div className="carousel-item">
                <img src={Med2} alt="" className="d-block w-100" height="500px"/>
                </div>

                <div className="carousel-item">
                <img src={Med3} alt="" className="d-block w-100" height="500px"/>
                </div>

                <div className="carousel-item">
                <img src={Med4} alt="" className="d-block w-100" height="500px"/>
                </div>
            </div>

        <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </Link >


        <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </Link >

       
        </div>
    </div>
    <div className="col-md-1"></div>
</section>
);
}
 

export default ImageCarousel;