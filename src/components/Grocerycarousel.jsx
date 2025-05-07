//carousel
import { Link } from "react-router-dom";
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import carousel4 from '../assets/carousel4.jpg'
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
                <img src={carousel1} alt="" className="d-block w-100" height="400px"/>
                </div>

                <div className="carousel-item">
                <img src={carousel2} alt="" className="d-block w-100" height="400px"/>
                </div>

                <div className="carousel-item">
                <img src={carousel3} alt="" className="d-block w-100" height="400px"/>
                </div>

                <div className="carousel-item">
                <img src={carousel4} alt="" className="d-block w-100" height="400px"/>
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