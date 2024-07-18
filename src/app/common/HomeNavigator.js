import React from 'react'

const HomeNavigator = ({children}) => {
  return (
    <div className=' homenavigator'>
      <div className='linkitem'> <span >Home</span> <span>/ {children}</span> </div>
    </div>
  )
}

export default HomeNavigator