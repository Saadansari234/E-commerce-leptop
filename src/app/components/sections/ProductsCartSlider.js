// best selling products
import Container from 'react-bootstrap/Container';
import ProductTitle from '../../common/ProductTitle';
import { Carousel2 } from '../carousel/Carousel-2';
import { CustomNextArrow, CustomPrevArrow } from '../../common/SliderButtons';
import React, { useRef } from 'react';
import CommonButton from '../../common/CommonButton';
import useMediaQuery from '../../utils/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../common/Card';
import { addToCart } from '../../store/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const ProductsCartSlider = ({ data, title, subtitle, children, }) => {
    // data = [undefined, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const navigate = useNavigate()
    const matches = useMediaQuery("(max-width:1025px)")
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

            }
        }
    };
    
    const dispatch = (useDispatch())
    const cartData = useSelector(state => state.addtocart)
    const handleAdd = (item) => {
        const isItemInCart = cartData.find(cartItem => cartItem.id === item.id);

        if (!isItemInCart) {
            dispatch(addToCart(item));
        } else {
            console.log('Item is already in the cart');
        }
    };
//    console.log(data);
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
                        data.map((item, index) => {
                            const {id}= item
                            return (
                        
                                matches ? (
                                    <div key={index} >

                                        <ProductCard
                                            count={item.count}
                                            imgURL={item.imgURL}
                                            rate={item.rate}
                                            onClick1={() => handleAdd(item)}
                                            onClick2={()=>navigate(`/view/${id}`)}
                                        />

                                    </div>

                                ) : (
                                    <div key={index}>
                                        {index === 0 ? (
                                            <div >
                                                {/* Content for undefined index */}
                                            </div>
                                        ) : (
                                            <div >
                                                <ProductCard
                                                    count={item.count}
                                                    imgURL={item.imgURL}
                                                    rate={item.rate}
                                                    onClick1={() => handleAdd(item)}
                                                    onClick2={()=>navigate(`/view/${id}`)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )



                            )
                        })
                    }
                </Carousel2>
                <div className='d-flex justify-content-center mt-3 mt-lg-5'>
                    <CommonButton title="View All Products" onClick={() => navigate("/shop")} className='slider-button' />
                </div>
            </div>
        </div>

    )
}



export default ProductsCartSlider