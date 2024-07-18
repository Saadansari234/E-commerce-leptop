import React from 'react'
import CommonButton from '../common/CommonButton'
import HomeNavigator from '../common/HomeNavigator'


const Notfound = () => {
  return (
    <div>
      <div className='container section-layout'>
      <HomeNavigator>
        Not Found
      </HomeNavigator>
      </div>
      <div className='container section-layout notfound'>
        <div className='heading'>Page Not Found</div>
        <div className='subheading'>Your visited page not found. You may go home page.</div>
        <CommonButton className="button" title="Go To Home Page" />
      </div>
    </div>
  )
}

export default Notfound