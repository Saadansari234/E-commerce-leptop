// Advertisements

import Carousel1 from "../carousel/Carousel-1";

function Adv() {

    let data = [
        "./assets/adv4.webp",
        "./assets/adv2.jpg",
        "./assets/adv3.png"
    ]

    return (
        <div className="container section-layout">
            <Carousel1  >
                {
                    data.map((item, index) => {
                        return (
                            <div className="slick-container" key={index} >
                                <img src={item} alt="leptop" />
                            </div>
                        )
                    })
                }


            </Carousel1>
        </div> 
    );
}

export default Adv;
