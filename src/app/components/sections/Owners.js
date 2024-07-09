import React from 'react'
import Carousel3 from '../carousel/Carousel-3'
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";


const Owners = () => {
    let data = [
        "./assets/owner-1.png",
        "./assets/owner-2.png",
        "./assets/owner-3.png"
    ]
    return (
        <div className="container section-layout">
            <Carousel3>
                {
                    data.map((item, index) => {
                        return (
                            <div className="slick-container" key={index} >
                                {/* <img src={item} alt="leptop" /> */}
                                <div className='owner-details' >
                                    <div>  {/* supportive div */}
                                        <div className='owner-image '>
                                            <img src={item} alt="owners imsge" />
                                        </div>
                                        <div className='mt-2 d-flex flex-column justify-content-between'>
                                            <div className='title'>tom cruise</div>
                                            <div className='subtitle'>CEO of the Company</div>
                                            <div className='icons d-flex gap-3'>
                                                <FaInstagram className='owner-socials' />
                                                <RiLinkedinBoxLine className='owner-socials' />
                                                <FiTwitter className='owner-socials'/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel3>
        </div>
    )
}

export default Owners