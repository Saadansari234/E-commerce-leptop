import React from 'react'
import Story from '../components/sections/Story'
import History from '../components/sections/History'
import Owners from '../components/sections/Owners'
import Services from '../components/sections/Services'
import HomeNavigator from '../common/HomeNavigator'
import Layout from '../Layout'
const Aboutus = () => {
  
  return (
    <Layout>
      <div className='container section-layout'>
        <HomeNavigator>
          About
        </HomeNavigator>
      </div>
      <Story />
      <History />
      <Owners />
      <Services />
    </Layout>
  )
}

export default Aboutus