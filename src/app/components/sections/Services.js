import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdSecurity } from "react-icons/md";

const Services = () => {
    const data = [
        {
            icon: <TbTruckDelivery />,
            title: "FREE AND FAST DELIVERY",
            subtitle: "Free delivery for all orders over $140"
        },
        {
            icon: <TfiHeadphoneAlt />,
            title: "24/7 CUSTOMER SERVICE",
            subtitle: "Friendly 24/7 customer support"
        },
        {
            icon: <MdSecurity />,
            title: "MONEY BACK GUARANTEE",
            subtitle: "We reurn money within 30 days"
        },
    ]
    return (
        <div className='services section-layout'>
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    {
                        data.map((item, index) => {
                            return (

                                <div className="col-lg-4 col-md-6 col-12 text-center " key={index}>
                                    <div className="d-flex justify-content-center">
                                        <div className='services-icon'>
                                            <div>
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                        <div className='title mt-3'>{item.title}</div>
                                        <div className='subtitle mt-1 mb-3'>{item.subtitle}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Services