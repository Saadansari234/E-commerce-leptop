import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/resource/Slick-custom.scss"


function Carousel1({  children }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 10000,
        // cssEase: "linear"

    };
    return (
        <div className="carousel-container-1">
           
            {/* <div className="slider-container"> */}
                <Slider {...settings}>
                    {
                        children
                    }

                </Slider>
            {/* </div> */}
        </div>

    );
}

export default Carousel1;
