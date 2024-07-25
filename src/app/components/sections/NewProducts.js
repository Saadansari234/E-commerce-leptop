import React from 'react'
import ProductTitle from '../../common/ProductTitle'
import useMediaQuery from '../../utils/useMediaQuery';
import Carousel1 from "../carousel/Carousel-1";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Media from "react-media"
const NewProducts = () => {
    const matches = useMediaQuery("(max-width:1025px)")
    const navigate=useNavigate()
    const isloggedin= useSelector(state=>state.LoginInfo)
    const handleLogin=()=>{
        alert("please login first")
        navigate("/login")
    }
    const data = [
        {
            image: "./assets/new-1.jpg",
            title: "PlayStation 5",
            subtitle: "Black and White version of the PS5 coming out on sale.",
          
        },
        {
            image: "./assets/new-2.avif",
            title: "PlayStation 5",
            subtitle: "Black and White version of the PS5 coming out on sale.",
          
        },
        {
            image: "./assets/new-2.avif",
            title: "PlayStation 5",
            subtitle: "Black and White version of the PS5 coming out on sale.",
          
        },
        {
            image: "./assets/new-2.avif",
            title: "PlayStation 5",
            subtitle: "Black and White version of the PS5 coming out on sale.",
          
        },
    ]
    return (
        <div className='container newproducts'>
            <div className="section-layout">
                <ProductTitle title={"Featured"} subtitle={"new arrival"} />

                {
                    matches ? (
                        <Carousel1>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div className='slick-container' key={index}>
                                            <div className='newproduct-image' key={index}>
                                                <img src={item.image} alt="item pic" />
                                                <div className='product-content'>
                                                    <div>{item.title}</div>
                                                    <div>{item.subtitle}</div>
                                                    {
                                                        isloggedin?(
                                                            <div onClick={()=>navigate("/shop") }>Shop now</div>
                                                        ):(
                                                            <div onClick={handleLogin}>Shop now</div>
                                                        )
                                                    }
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel1>
                    ) : (
                        <div className='row d-flex justify-content-end product-container'>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} className={index < 2 ? "col-6" : "col-3"} >
                                            <div className='newproduct-image'>
                                                <img src={item.image} alt="item pic" />
                                                <div className='product-content'>
                                                    <div>{item.title}</div>
                                                    <div>{item.subtitle}</div>
                                                    {
                                                        isloggedin?(
                                                            <div onClick={()=>navigate("/shop") }>Shop now</div>
                                                        ):(
                                                            <div onClick={handleLogin}>Shop now</div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )

                }




            </div>
        </div>
    )
}

export default NewProducts