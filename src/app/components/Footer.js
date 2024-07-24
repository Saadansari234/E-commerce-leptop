import React from 'react'
import Naviagtion from '../utils/navigatation'

const Footer = () => {
    return (
        <footer className='footer pt-lg-4 pt-sm-0'>
            <div className='container footer-content-sec'>
                <div className='row'>
                    <div className='col-4 footer-title'>
                        <h5>connect</h5>
                        <div className='footer-content'>
                            <div><a href='mailto:saadansari3212@gmail.com' target="blank" >saadansari3212@gmail.com</a></div>
                            <div><a href='https://www.linkedin.com/in/saadansari234/' target="blank" >Saadansari234@linkedin</a></div>
                            <div><a href='https://github.com/Saadansari234' target="blank" >Saadansari234@github</a></div>
                        </div>
                    </div>
                    <div className='col-4 footer-title'>
                        <h5>Account</h5>
                        <div className='footer-content'>
                            <div>My Profile</div>
                            <div><Naviagtion path={"/login"}>Login / Register</Naviagtion></div>
                            <div><Naviagtion path={"/about"}>about</Naviagtion></div>
                            <div><Naviagtion path={"/contact"}>contact</Naviagtion></div>
                            <div><Naviagtion path={"/shop"}>shop</Naviagtion></div>
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
                <p>saad ansari 2024. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer