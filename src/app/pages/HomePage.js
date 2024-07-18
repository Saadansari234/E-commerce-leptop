import React from 'react'
import Adv from '../components/sections/Adv';
import ProductsCartSlider from '../components/sections/ProductsCartSlider';
import NewProducts from '../components/sections/NewProducts';
import Countdown from '../common/Countdown';
import Services from '../components/sections/Services';
import ProductCard2 from '../common/Card3';
import ProductCard from "../common/Card"
import ProductsCartSlider1 from '../components/sections/ProductCardSlider1';

const HomePage = () => {
  let flashSalesData = [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let ourProductsData = [
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
    { rate: 4, count: 45 },
  ]
  return (
    <>
      <Adv />
      <ProductsCartSlider
        title={"todays's"}
        subtitle={"flash sales"}
        data={flashSalesData}
        children={<Countdown />}
        sliderCard={<ProductCard />}
      />

      <NewProducts />

      <ProductsCartSlider1
        title={"featured"}
        subtitle={"our products"}
        data={ourProductsData}
        sliderCard={< ProductCard2 />}
      />
      <Services />
    </>
  );
}

export default HomePage