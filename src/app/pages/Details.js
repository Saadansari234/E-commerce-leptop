import React from 'react'
import ProductDetails from '../components/sections/ProductDetails'
import ProductsCartSlider from '../components/sections/ProductsCartSlider';
const Details = () => {
  let suggetionsData=[undefined,1,2,3,4,5,6,7,8,9]
  return (
    <div>
        <ProductDetails/>
        <div className="section-layout">

        <ProductsCartSlider
      title={"related items"}
      data={ suggetionsData}
      />
        </div>
    </div>
  )
}

export default Details