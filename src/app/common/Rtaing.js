
import { FaStar } from "react-icons/fa";
const Ratings = ({ Rate }) => {

    return (
      <div>
        <FaStar style={{ color: Rate > 0 ? "#FFAD33" : null }} />
        <FaStar style={{ color: Rate > 1 ? "#FFAD33" : null }} />
        <FaStar style={{ color: Rate > 2 ? "#FFAD33" : null }} />
        <FaStar style={{ color: Rate > 3 ? "#FFAD33" : null }} />
        <FaStar style={{ color: Rate > 4 ? "#FFAD33" : null }} />
      </div>
    )
  }

  export default Ratings
  