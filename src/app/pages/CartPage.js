import React from 'react'
import HomeNavigator from '../common/HomeNavigator'
import Layout from '../Layout'
import ProductTitle from '../common/ProductTitle'
import ProductCard2 from '../common/Card3'
import Ratings from '../common/Rtaing'
import Shops from '../database/Shops'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard3 from '../common/Card4'
import { removeFromCart } from '../store/action'
import { useNavigate } from 'react-router-dom'
const CartPage = () => {
  const data = useSelector(state => state.addtocart)
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const handleRemove=(index)=>{
    dispatch(removeFromCart(index))
  }

  return (
    <Layout>
      <div className='container '>
        <div className='section-layout'>
          <HomeNavigator>
            Cart
          </HomeNavigator>
        </div>
       

        <ProductTitle title="cart products" />
        {
          data.length === 0 ? (
            <div className='noentry-sign'>No Entry</div>
          ) : (
            <div className='row mt-5 '>
              {
                data.map((item, index) => {
                  return (
                    <div className='d-flex justify-content-center  col-12 col-md-6 col-lg-4 col-xl-3 mb-5' key={index}>
                      <ProductCard3 imgURL={item.imgURL} onClick1={()=>handleRemove(index)}  onclick2={()=>navigate(`/view/${item.id}`)}/>
                      
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default CartPage