
// import "../styles/resource/slick-custom-2.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const CustomPrevArrow = ({ onClick }) => (
    <div className="carousel-container-2">
        <button
            type="button"
            className=" custom-arrow custom-prev-arrow"
            onClick={onClick}
        >
            <FaArrowLeft /> {/* You can use any content, like an icon or text */}
        </button>
    </div>
);

export const CustomNextArrow = ({ onClick }) => (
    <div className="carousel-container-2">
        <button
            type="button"
            className="  custom-arrow custom-next-arrow"
            onClick={onClick}
        >
            <FaArrowRight />{/* You can use any content, like an icon or text */}
        </button>
    </div>
);
