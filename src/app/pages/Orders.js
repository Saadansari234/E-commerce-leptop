import React from 'react'
import Layout from '../Layout'
import HomeNavigator from '../common/HomeNavigator'
import Countdown from '../common/Countdown'
import Searchbar from '../common/Searchbar'
import { FiPackage } from "react-icons/fi";
import Ratings2 from '../common/Ratings2'
import { Scrollbar } from 'react-scrollbars-custom';
import { useSelector } from 'react-redux'

const Orders = () => {
  const accountname = localStorage.getItem("username")
  const data = useSelector(state => state.addtoOrder)
  return (
    <Layout>
      <div className='orders'>
        <div className=' count-container '>
          <div>Super Saver Sale Ends In</div>
          <Countdown id={"countdown2"} />
        </div>
        <div className='container '>
          <div className='section-layout'>
            <HomeNavigator>
              orders
            </HomeNavigator>

            <div className='title'>
              <div>account</div>
              <div>{accountname}</div>
            </div>

            <div className='title-2'>
              <div>all orders</div>
              <Searchbar />
            </div>
            <div className='products-container'>
              <Scrollbar style={{ width: "100%", height: "150vh" }}>
                {
                  data.length ? (
                    data.map((item, index) => {
                      return (
                        <section className='products-sec' key={index}>
                          <div className='product-container'>

                            <div className='order-status'>
                              <div>
                                <FiPackage className='package-icon' />
                              </div>
                              <div>delivery on the way</div>
                            </div>
                            <div className='product-details'>
                              <div className='d-flex align-items-center gap-4'>
                                <div className='product-pic'>
                                  <img src='./assets/new-1.jpg' alt='product-pic' />
                                </div>
                                <div className='product-info'>
                                  <div>{item.Name}</div>
                                  <div>${item.price}.00</div>
                                </div>
                              </div>
                            </div>
                            <div className='review-sec'>
                              <div className='ratings'>
                                <Ratings2 className="rating-icon" />
                                <div>rate and review to <span>win exclusive credit</span></div>
                              </div>
                              <div className='seemore'>
                                <span>see details</span>
                              </div>
                            </div>
                          </div>
                        </section>
                      )
                    })

                  ) : (null)
                }



              </Scrollbar>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Orders