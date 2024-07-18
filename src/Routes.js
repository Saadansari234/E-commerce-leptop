import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './app/pages/HomePage';
import Aboutus from './app/pages/Aboutus';
import Contactus from './app/pages/Contactus';
import Details from './app/pages/Details';
import Shop from './app/pages/Shop';
import Notfound from './app/pages/Notfound';
import CartPage from './app/pages/CartPage';
import SignupPage from './app/pages/SignupPage'

const AppRoutes = () => {
    return (
    
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/contact' element={<Contactus />} />
         
        </Routes>
        
    )
}



export default AppRoutes