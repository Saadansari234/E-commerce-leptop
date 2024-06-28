import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/resource/Slick-custom.scss"

function Adv() {
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
        <div className="container section-layout">
            <div className="slider-container">
                <Slider {...settings}>
                    <div >
                        <div className="adv-container" >
                            <img src="./assets/adv4.webp" alt="leptop" />
                        </div>
                    </div>
                    <div >
                        <div className="adv-container" >
                            <img src="./assets/adv2.jpg" alt="leptop" />
                        </div>
                    </div>
                    <div >
                        <div className="adv-container" >
                            <img src="./assets/adv3.png" alt="leptop" />
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
}

export default Adv;
