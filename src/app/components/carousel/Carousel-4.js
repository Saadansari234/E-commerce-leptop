import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";

function Carousel4() {
    const baseUrl = "./assets/details"
    const settings = {
        customPaging: function (i) {
            return
            (
                <a >
                    <img src={`${baseUrl}/pro-${i + 1}.jpg`} />
                </a>

            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-6" style={{ height: "20vh" }}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div style={{ width: "100%", height: "100%" }}>
                                <img src={baseUrl + "/pro-1.jpg"} className="w-100 h-100 object-fit-contain" />
                            </div>
                            <div style={{ width: "100%", height: "100%" }}>
                                <img src={baseUrl + "/pro-2.jpg"} className="w-100 h-100 object-fit-contain" />
                            </div>
                            <div style={{ width: "100%", height: "100%" }}>
                                <img src={baseUrl + "/pro-1.jpg"} className="w-100 h-100 object-fit-contain" />
                            </div>
                            <div style={{ width: "100%", height: "100%" }}>
                                <img src={baseUrl + "/pro-2.jpg"} className="w-100 h-100 object-fit-contain" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel4;
