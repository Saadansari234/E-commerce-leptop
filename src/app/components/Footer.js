import React from 'react'


const Footer = () => {
    return (
        <footer className='footer pt-lg-4 pt-sm-0'>
            <div className='container footer-content-sec'>
                <div className='row'>
                    <div className='col-4 footer-title'>
                        <h5>Support</h5>
                        <div className='footer-content'>
                            <div>exclusive@gmail.com</div>
                            <div>+88015-88888-9999</div>
                        </div>
                    </div>
                    <div className='col-4 footer-title'>
                        <h5>Account</h5>
                        <div className='footer-content'>
                            <div>My Account</div>
                            <div>Login / Register</div>
                            <div>Cart</div>
                            <div>Wishlist</div>
                            <div>Shop</div>
                        </div>
                    </div>
                    <div className='col-4 footer-title'>
                        <h5>Quick Link</h5>
                        <div className='footer-content'>
                            <div>Privacy Policy</div>
                            <div>Terms Of Use</div>
                            <div>FAQ</div>
                            <div>Contact</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer