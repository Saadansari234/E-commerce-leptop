
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomPaging() {
    const baseUrl = "./assets/details"
    const settings = {
        customPaging: function (i) {
            return (
                <a >
                    <img src={`${baseUrl}/pro-${i + 1}.jpg`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=" carousel-container-4">

            <div className="slider-container">
                <Slider {...settings}>
                    <div className="slick-container">
                        <img src={baseUrl + "/pro-1.jpg"} />
                    </div>
                    <div className="slick-container">
                        <img src={baseUrl + "/pro-2.jpg"} />
                    </div>
                    <div className="slick-container">
                        <img src={baseUrl + "/pro-1.jpg"} />
                    </div>
                    <div className="slick-container">
                        <img src={baseUrl + "/pro-2.jpg"} />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CustomPaging;
