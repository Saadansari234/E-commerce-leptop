import React, {  useEffect, } from 'react'
import ProductDetails from '../components/sections/ProductDetails'
import ProductsCartSlider1 from '../components/sections/ProductCardSlider1';
import HomeNavigator from '../common/HomeNavigator'
import Layout from '../Layout';
import { Recomenddata } from '../database/Products';
import { useParams } from 'react-router-dom';
import CustomModal from '../common/Modal';
import { useState } from 'react';
import Shops from '../database/Shops';
import { allSideViews } from '../database/Products';
import { addToOrder } from '../store/action';
import { useDispatch } from 'react-redux';

const Details = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [imgData, setImgData] = useState([]);
  const dispatch = useDispatch()
  

  useEffect(() => {
    const foundProduct = Shops.find(item => item.id === id);
    setProduct(foundProduct)
    if (foundProduct) {
      setImgData([foundProduct.imgURL, allSideViews.imgURL2, allSideViews.imgURL3, allSideViews.imgURL4]);
      console.log(product)
    } else {
      console.log('No data found');
    }
  }, [id, product])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOrder = () => {
    dispatch(addToOrder(product))
  }

  if (!product) return <>Loading...</>
  return (
    <div>
      <CustomModal show={show} onClick2={handleClose} />
      <Layout>
        <div>
          <div className='container section-layout'>
            <HomeNavigator>
              Details
            </HomeNavigator>
          </div>

          <ProductDetails
            onClick={() => { handleShow(); handleOrder(); }}
            imgData={imgData}
            title={product.Name}
            price={product.price}
            rate={product.rate}
          />

          <div className="section-layout">
            <ProductsCartSlider1
              title={"related items"}
              data={Recomenddata}

            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Details