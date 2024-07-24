import React from 'react'
import Adv from '../components/sections/Adv';
import ProductsCartSlider from '../components/sections/ProductsCartSlider';
import NewProducts from '../components/sections/NewProducts';
import Countdown from '../common/Countdown';
import Services from '../components/sections/Services';
import ProductCard2 from '../common/Card3';
import ProductCard from "../common/Card"
import ProductsCartSlider1 from '../components/sections/ProductCardSlider1';
import Layout from '../Layout';
import Flashsales from '../database/Flashsales';
import { Productsdata } from '../database/Products';
const HomePage = () => {
  
  return (
    <Layout>
      <Adv />
      <ProductsCartSlider
        title={"todays's"}
        subtitle={"flash sales"}
        data={Flashsales}
        children={<Countdown id={"countdown"} />}
      />

      <NewProducts />

      <ProductsCartSlider1
        title={"featured"}
        subtitle={"our products"}
        data={Productsdata}
        // sliderCard={< ProductCard2 />}
      />
      <Services />
    </Layout>
  );
}

export default HomePage