// best selling products
import Container from 'react-bootstrap/Container';
import ProductTitle from '../../common/ProductTitle';
import { Carousel2 } from '../carousel/Carousel-2';
import { CustomNextArrow, CustomPrevArrow } from '../../common/SliderButtons';
import React, { useRef } from 'react';
import CommonButton from '../../common/CommonButton';
import Ratings from '../../common/Rtaing';
const ProductsCartSlider1 = ({ data, title, subtitle, children, sliderCard }) => {
    // data = [undefined, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
            <div className='mt-3 mt-lg-5 carousel-container container '>

                <Carousel2 sliderRef={sliderRef} >
                    {
                        data.map((item, index) => {
                            return (


                                <div style={{ display: "flex", justifyContent: "center" }} key={index} >

                                    {
                                    item.rate ? (
                                        React.cloneElement(sliderCard, { children: <><Ratings Rate={item.rate} /><div>({item.count})</div> </> })
                                    ):(
                                        sliderCard
                                    )
                                     
                                    }

                                </div>

                            )



                        })
                    }
                </Carousel2>
                <div className='d-flex justify-content-center mt-3 mt-lg-5'>
                    <CommonButton title="View All Products" className='slider-button' />
                </div>
            </div>
        </div >

    )
}



export default ProductsCartSlider1