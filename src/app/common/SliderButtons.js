
import "../styles/resource/slick-custom-2.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const CustomPrevArrow = ({ onClick }) => (
    <button
        type="button"
        className="custom-arrow custom-prev-arrow"
        onClick={onClick}
    >
       <FaArrowLeft /> {/* You can use any content, like an icon or text */}
    </button>
);

export const CustomNextArrow = ({ onClick }) => (
    <button
        type="button"
        className="custom-arrow custom-next-arrow"
        onClick={onClick}
    >
       <FaArrowRight />{/* You can use any content, like an icon or text */}
    </button>
);
