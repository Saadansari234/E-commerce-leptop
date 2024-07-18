// import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import ProductCard from '../common/Card';
// import Media from "react-media"

export const Carousel2 = ({ sliderRef, children }) => {


    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
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

        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {
                    children
                }

            </Slider>
        </div>

    )
}
