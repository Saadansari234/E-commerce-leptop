import React from 'react'
import { AiOutlineShop } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { BiDollarCircle } from "react-icons/bi";


const History = () => {
    const data = [
        {
            icon: <AiOutlineShop />,
            numbers: "10.5k",
            history: "Sallers active our site"
        },
        {
            icon: <BiDollarCircle />,
            numbers: "33k",
            history: "Mopnthly Produduct Sale"
        },
        {
            icon: <LuShoppingBag />,
            numbers: "45.5k",
            history: "Customer active in our site"
        },
        {
            icon: <FaSackDollar />,
            numbers: "25k",
            history: "Anual gross sale in our site"
        }
    ]
    return (
        <div className='container section-layout history'>
            <div className="row d-flex justify-content-center">
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-12 col-md-4 col-lg-3 text-center mb-3 '>
                                <div className='history-container'>
                                    <div className="d-flex justify-content-center ">
                                        <div className='history-icon'>
                                            <div>
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='title mt-3'>{item.numbers}</div>
                                    <div className='subtitle mt-1 '>{item.history}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History