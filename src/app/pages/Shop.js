import React from 'react'
import ProductTitle from '../common/ProductTitle'
import ProductCard2 from '../common/Card3'
import Ratings from '../common/Rtaing'
import HomeNavigator from '../common/HomeNavigator'
import Searchbar from '../common/Searchbar'
import Layout from '../Layout'
import Shops from '../database/Shops'
import { useNavigate } from 'react-router-dom'
const Shop = () => {
    const navigate=useNavigate()

    return (
        <Layout>
            <div className='container section-layout shop'>
                <div className='shop-search py-3'>
                    <HomeNavigator>
                        Shop
                    </HomeNavigator>
                    <Searchbar />
                </div>
                <ProductTitle title="Shops" />

                <div className='row mt-5 '>
                    {
                        Shops.map((item, index) => {
                            return (
                                <div className='d-flex justify-content-center  col-12 col-md-6 col-lg-4 col-xl-3 mb-5' key={index}>
                                    <ProductCard2 imgURL={item.imgURL}  onclick2={()=>navigate(`/view/${item.id}`)}>
                                        <Ratings Rate={item.rate} />
                                        <div>({item.count})</div>
                                    </ProductCard2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Shop