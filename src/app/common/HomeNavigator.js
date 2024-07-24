import React from 'react'
import Naviagtion from '../utils/navigatation'
const HomeNavigator = ({children}) => {
  return (
    <div className=' homenavigator'>
      <div className='linkitem'> <span ><Naviagtion path={"/"}>Home</Naviagtion></span> <span>/ {children}</span> </div>
    </div>
  )
}

export default HomeNavigator