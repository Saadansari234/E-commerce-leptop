// best selling products
import Container from 'react-bootstrap/Container';
import ProductTitle from '../../common/ProductTitle';
import Countdown from '../../common/Countdown';
import { ProductCarousel } from '../ProductCarousel';
import { CustomNextArrow, CustomPrevArrow } from '../../common/SliderButtons';
import React, { useRef } from 'react';
import CommonButton from '../../common/CommonButton';
import ProductCard from '../../common/Card';
import Media from "react-media"

const ProductsCartSlider = () => {
    const data = [undefined, 2, 3, 4, 5, 6, 7, 8,9,10,11,12]

    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
            const totalSlides = sliderRef.current.innerSlider.state.slideCount;
            if (currentSlide < totalSlides - 4) {
                sliderRef.current.slickNext();
                //    console.log(currentSlide); 
                //     console.log(totalSlides );
            }
        }
    };

    return (
        <div className='section-layout'>
            <Container >
                <ProductTitle title={"Today's"} subtitle={"flash sales"}>
                    <div >
                        <Countdown />
                    </div>
                    <div className=' d-flex justify-content-sm-start justify-content-lg-end  ' >
                        <div className='d-flex align-align-items-center gap-2'>
                            <CustomPrevArrow onClick={handlePrevClick} />
                            <CustomNextArrow onClick={handleNextClick} />
                        </div>
                    </div>
                </ProductTitle>
            </Container>
            <div className='mt-3 mt-lg-5 carousel-container '>

                <ProductCarousel sliderRef={sliderRef} >
                    {
                        data.map((_, index) => {
                            return (
                                <Media query="(max-width:480px)">
                                    {
                                        matches => {
                                            return matches ? (
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <ProductCard />
                                                </div>

                                            ) : (
                                                <div key={index}>
                                                    {index === 0 ? (
                                                        <div style={{ display: "flex", justifyContent: "center" }}>

                                                        </div>
                                                    ) : (
                                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                                            <ProductCard />
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        }
                                    }

                                </Media>
                            )
                        })
                    }
                </ProductCarousel>
                <div className='d-flex justify-content-center mt-3 mt-lg-5'>
                    <CommonButton title="View All Products" className='slider-button' />
                </div>
            </div>
        </div>

    )
}



export default ProductsCartSlider