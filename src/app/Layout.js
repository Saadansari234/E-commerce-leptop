import React from 'react'
import Footer from './components/Footer'
import Menubar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'

const Layout = (props) => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Menubar />
                {props.children}
                <Footer />
              
            </BrowserRouter>
        </div>
    )
}

export default Layout