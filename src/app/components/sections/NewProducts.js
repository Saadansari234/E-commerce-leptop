import React from 'react'
import ProductTitle from '../../common/ProductTitle'
const NewProducts = () => {
    return (
        <div className='container newproducts'>
            <div className="section-layout">
                <ProductTitle title={"Featured"} subtitle={"new arrival"} />
                <div className='row d-flex justify-content-end product-container'>
                    {/* First column with 50% height */}
                    <div className="col-6 " >
                        <div className='newproduct-image'>
                            <img src="./assets/new-1.jpg" alt="" />

                        </div>
                    </div>

                    {/* Last column with 25% height, positioned beside the first column */}
                    <div className="col-6" >
                        <div className='newproduct-image'>
                            <img src="./assets/new-2.avif" alt="" />
                        </div>
                    </div>

                    {/* Second and third columns with 25% height */}
                    <div className="col-3" >
                        <div className='newproduct-image'>
                            <img src="./assets/new-2.avif" alt="" />
                        </div>
                    </div>
                    <div className="col-3" >
                        <div className='newproduct-image'>
                            <img src="./assets/new-2.avif" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewProducts