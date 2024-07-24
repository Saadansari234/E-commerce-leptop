import { useEffect } from "react";

function ScrollOnTop() {
    useEffect(()=>{
window.scrollTo(0, 0)
    },[])
}

export default ScrollOnTop