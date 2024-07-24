
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Ratings2 = (props) => {
    const [Rate, setRate]=useState(0)
    const [hoverrate, setHoverrate]= useState(0)
    return (
        <div className={props.className}>
            <FaStar style={{ color: Rate > 0 ? "#DB4444" : hoverrate > 0 ? "#DB4444" :null }} onClick={()=>setRate(1)}  onMouseEnter={()=>setHoverrate(1)} onMouseLeave={()=>setHoverrate(0)} />
            <FaStar style={{ color: Rate > 1 ? "#DB4444" : hoverrate > 1 ? "#DB4444" :null }} onClick={()=>setRate(2)} onMouseEnter={()=>setHoverrate(2)} onMouseLeave={()=>setHoverrate(0)} />
            <FaStar style={{ color: Rate > 2 ? "#DB4444" : hoverrate > 2 ? "#DB4444" :null }} onClick={()=>setRate(3)} onMouseEnter={()=>setHoverrate(3)} onMouseLeave={()=>setHoverrate(0)}/>
            <FaStar style={{ color: Rate > 3 ? "#DB4444" : hoverrate > 3 ? "#DB4444" :null }} onClick={()=>setRate(4)} onMouseEnter={()=>setHoverrate(4)} onMouseLeave={()=>setHoverrate(0)} />
            <FaStar style={{ color: Rate > 4 ? "#DB4444" : hoverrate > 4 ? "#DB4444" :null }} onClick={()=>setRate(5)} onMouseEnter={()=>setHoverrate(5)} onMouseLeave={()=>setHoverrate(0)} />
        </div>
    )
}

export default Ratings2