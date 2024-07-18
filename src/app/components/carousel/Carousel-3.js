import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/resource/Slick-custom.scss"


function Carousel3({ children }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1200, // xl
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992, // lg
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // md
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };
    return (
        <div className="carousel-container-3">

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

export default Carousel3;