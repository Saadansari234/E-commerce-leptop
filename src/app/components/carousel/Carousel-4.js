
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel4({ imgURLs }) {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <div>
                        <img src={imgURLs[i]} alt="Slide 1" />
                    </div>
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
                    {imgURLs.map((url, index) => (
                        <div className="slick-container" key={index}>
                            <img src={url} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Carousel4;
