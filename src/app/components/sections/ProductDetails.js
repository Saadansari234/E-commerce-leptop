import React, { useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import Carousel4 from '../carousel/Carousel-4'
import CommonButton from "../../common/CommonButton"
import Ratings from '../../common/Rtaing';

const ProductDetails = ({onClick, imgData, title, price, rate}) => {
    const [count, setCount] = useState(1)
   
    const handleCountMinus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleCountPlus = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    return (
        <div className='container section-layout Details '>

            <div className="row">
                <div className="col-12 col-lg-6" >
                    <Carousel4 
                    imgURLs={imgData}
                    />
                </div>
                <div className=" col-12 col-lg-6  mt-3 mt-lg-0" >
                    <div className=" details-sec">
                        <div className='detail-container' >

                            <div className='title'>{title}</div>
                            <Ratings Rate={rate} />
                            <div className='price'>${count * price}.00</div>
                            <p className='desc'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                            <hr />
                            <div className='d-flex gap-2'>
                                <div className='d-flex'>
                                    <div className='qty-contain' >
                                        <div onClick={handleCountMinus} className='minus'>-</div>
                                        <div className='qty'>{count}</div>
                                        <div onClick={handleCountPlus} className='plus'>+</div>
                                    </div>
                                </div>
                                <CommonButton onClick={onClick} className="order-button" title="Place Order" />
                            </div>
                            <div className='offers-contain mt-3'>
                                <div className='offers'>
                                    <TbTruckDelivery className='offer-icon' />
                                    <div>
                                        <div className='title'>Free Delivery</div>
                                        <div className='subtitle'><span>Enter your postal code for Delivery Availability</span></div>
                                    </div>
                                </div>
                                <div className='offers'>
                                    <HiMiniArrowPathRoundedSquare className='offer-icon' />
                                    <div>
                                        <div className='title'>Return Delivery</div>
                                        <div className='subtitle'>Free 30 Days Delivery Returns. <span>Details</span> </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails