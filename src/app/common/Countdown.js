
import { useState, useEffect } from 'react';

const Countdown = ({id}) => {

    const calculateTimeLeft = () => {
        const saleEndDate = new Date("Jul 30, 2024 18:00:00").getTime();
        const now = new Date().getTime();
        const distance = saleEndDate - now;

        let timeLeft = {};

        if (distance > 0) {
            timeLeft = {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (

        <div id={id} className='d-flex gap-3 align-items-center'>

            <div className='timing-container '>

                <div className='d-flex flex-column align-items-center'>
                    <div className='timing-info'>Days</div>
                    <div className='timing-num'>{timeLeft.days}</div>
                </div>
                <div className='d-flex align-items-center mx-sm-1 mx-lg-2 my-3'>
                    <div className='coolun'>:</div>
                </div>
            </div>


            <div className='timing-container '>

                <div className='d-flex flex-column align-items-center'>
                    <div className='timing-info'>Hours</div>
                    <div className='timing-num'>{timeLeft.hours}</div>
                </div>
                <div className='d-flex align-items-center mx-sm-1 mx-lg-2 my-3'>
                    <div className='coolun'>:</div>
                </div>
            </div>


            <div className='timing-container '>

                <div className='d-flex flex-column align-items-center'>
                    <div className='timing-info'>Minutes</div>
                    <div className='timing-num'>{timeLeft.minutes}</div>
                </div>
                <div className='d-flex align-items-center mx-sm-1 mx-lg-2 my-3'>
                    <div className='coolun'>:</div>
                </div>
            </div>



            <div className='timing-container '>

                <div className='d-flex flex-column align-items-center'>
                    <div className='timing-info'>Seconds</div>
                    <div className='timing-num'>{timeLeft.seconds}</div>
                </div>
                <div className='d-flex align-items-center mx-sm-1 mx-lg-2 my-3 opacity-0'>
                    <div className='coolun'>:</div>
                </div>
            </div>
        </div>
    )

}

export default Countdown