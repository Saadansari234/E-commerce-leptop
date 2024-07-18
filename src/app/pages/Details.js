import React from 'react'
import ProductDetails from '../components/sections/ProductDetails'
import ProductsCartSlider1 from '../components/sections/ProductCardSlider1';
import ProductCard2 from '../common/Card3';
import Ratings from '../common/Rtaing';
import HomeNavigator from '../common/HomeNavigator'


const Details = () => {
  let suggetionsData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
  return (
    <div>
      <div className='container section-layout'>
        <HomeNavigator>
          Details
        </HomeNavigator>
      </div>
      <ProductDetails />
      <div className="section-layout">
        <ProductsCartSlider1
          title={"related items"}
          data={suggetionsData}
          sliderCard={< ProductCard2 />}
        />
      </div>
    </div>
  )
}

export default Details