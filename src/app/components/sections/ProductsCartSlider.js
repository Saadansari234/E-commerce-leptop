// best selling products
import Container from 'react-bootstrap/Container';
import ProductTitle from '../../common/ProductTitle';
import { Ratings } from '../../common/Card';
import { Carousel2 } from '../carousel/Carousel-2';
import { CustomNextArrow, CustomPrevArrow } from '../../common/SliderButtons';
import React, { useRef } from 'react';
import CommonButton from '../../common/CommonButton';
import ProductCard from '../../common/Card';
import Media from "react-media"

const ProductsCartSlider = ({ data, title, subtitle, children }) => {
    data = [undefined, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
        <div className='section-layout '>
            <Container >
                <ProductTitle title={title} subtitle={subtitle}>
                    <div >
                        {children}
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

                <Carousel2 sliderRef={sliderRef} >
                    {
                        data.map((_, index) => {
                            return (
                                <Media query="(max-width:480px)">
                                    {
                                        matches => {
                                            return matches ? (
                                                <div style={{ display: "flex", justifyContent: "center" }} key={index} >
                                                    <ProductCard
                                                        imageURL="./assets/lep-1.jpg"
                                                        disc="-40"
                                                        buttonTitle="Add To Cart"
                                                        className="card-button"
                                                        title="IPS LCD Gaming Monitor"
                                                        price="960"
                                                        allprice="1160"
                                                    >
                                                        <Ratings Rate={4} />
                                                        <div>(45)</div>
                                                    </ProductCard>
                                                </div>

                                            ) : (
                                                <div key={index}>
                                                    {index === 0 ? (
                                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                                            {/* Content for undefined index */}
                                                        </div>
                                                    ) : (
                                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                                            <ProductCard
                                                                imageURL="./assets/lep-1.jpg"
                                                                // discount="-40%"
                                                                buttonTitle="Add To Cart"
                                                                className="card-button"
                                                                title="IPS LCD Gaming Monitor"
                                                                price="960"
                                                            // cutprice="1160"
                                                            >
                                                                <Ratings Rate={4} />
                                                                <div>(45)</div>
                                                            </ProductCard>
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
                </Carousel2>
                <div className='d-flex justify-content-center mt-3 mt-lg-5'>
                    <CommonButton title="View All Products" className='slider-button' />
                </div>
            </div>
        </div>

    )
}



export default ProductsCartSlider