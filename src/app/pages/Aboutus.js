import React from 'react'
import Story from '../components/sections/Story'
import History from '../components/sections/History'
import Owners from '../components/sections/Owners'
import Services from '../components/sections/Services'
import HomeNavigator from '../common/HomeNavigator'

const Aboutus = () => {
  return (
    <>
    <div className='container section-layout'>
      <HomeNavigator>
        About
      </HomeNavigator>
    </div>
    <Story/>
    <History/>
    <Owners/>
    <Services/>
    </>
  )
}

export default Aboutus