import React from 'react'
import Footer from './components/Footer'
import Menubar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import ScrollOnTop from './utils/ScrollTop'

const Layout = (props) => {
    ScrollOnTop()
    return (
        <div className='App'>
            <Menubar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout