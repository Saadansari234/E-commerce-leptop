import { useNavigate } from "react-router-dom";
const Naviagtion = ({path, children}) => {
    const navto = useNavigate()

    return (
        <div onClick={() => navto(path)}>{children}</div>
    )
}

export default Naviagtion