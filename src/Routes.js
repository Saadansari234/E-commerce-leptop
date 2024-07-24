import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from './app/pages/HomePage';
import Aboutus from './app/pages/Aboutus';
import Contactus from './app/pages/Contactus';
import Details from './app/pages/Details';
import Shop from './app/pages/Shop';
import Notfound from './app/pages/Notfound';
import CartPage from './app/pages/CartPage';
import SignupPage from './app/pages/SignupPage'
import SigninPage from './app/pages/SigninPage';
import Orders from './app/pages/Orders';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<Aboutus />} />
                <Route path='/contact' element={<Contactus />} />
                <Route path='/shop' element={<Shop />}/>
                <Route path='*' element={<Notfound />}/>
                <Route path='/view/:id' element={<Details />}/>
                <Route path='/cart' element={<CartPage />}/>
                <Route path='/orders' element={<Orders />}/>
                <Route path="/login" element={<SigninPage />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    )
}



export default AppRoutes