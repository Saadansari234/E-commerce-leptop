import React from 'react'
import ProductTitle from '../common/ProductTitle'
import ProductCard2 from '../common/Card3'
import Ratings from '../common/Rtaing'
import HomeNavigator from '../common/HomeNavigator'
import Searchbar from '../common/Searchbar'
const Shop = () => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className='container section-layout shop'>
            <div className='shop-search py-3'>
                <HomeNavigator>
                    Shop
                </HomeNavigator>
                <Searchbar/>
            </div>
            <ProductTitle title="Shops" />

            <div className='row mt-5 '>
                {
                    products.map((item, index) => {
                        return (
                            <div className='d-flex justify-content-center  col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>
                                <ProductCard2 >
                                    <Ratings Rate={4} />
                                    <div>(45)</div>
                                </ProductCard2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop