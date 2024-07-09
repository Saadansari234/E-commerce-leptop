import React from 'react'
import Adv from '../components/sections/Adv';
import ProductsCartSlider from '../components/sections/ProductsCartSlider';
import NewProducts from '../components/sections/NewProducts';
import Countdown from '../common/Countdown';
import Services from '../components/sections/Services';

const HomePage = () => {
  let flashSalesData=[undefined,1,2,3,4,5,6,7,8,9]
  let ourProductsData=[undefined,1,2,3,4,5,6,7,8,9]
  return (
    <>
      <Adv />
      <ProductsCartSlider
      title={"todays's"}
      subtitle={"flash sales"}
      data={ flashSalesData}
      children={<Countdown/>}
      />

      <NewProducts/>

      <ProductsCartSlider
      title={"featured"}
      subtitle={"our products"}
      data={ ourProductsData}
      />
      <Services/>
    </>
  );
}

export default HomePage