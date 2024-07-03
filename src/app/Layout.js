import React from 'react'
import Footer from './components/Footer'
import Menubar from './components/Navbar'


const Layout = (props) => {
    return (
        <div className='App'>
            <Menubar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout