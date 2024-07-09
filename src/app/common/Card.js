
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import CommonButton from './CommonButton';

function ProductCard() {
  return (
    <Card  className='card' border='0'>
      <Card.Img variant="top" src="./assets/lep-1.jpg" height={200}  />
      <div className='card-hover-sec' >
        <span>
          -40%
        </span>
         <CommonButton title="Add To Cart" className="card-button"/>
      </div>
      <Card.Body className='card-body' >
        <Card.Title className='card-title'>IPS LCD Gaming Monitor</Card.Title>
        <Card.Text className='card-text'>$960 <span >$1160</span></Card.Text>
        <div className='card-rating'>
          <Ratings Rate={4} />
          <div>(45)</div>
        </div>
      </Card.Body>
    </Card>
  );
}

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

export default ProductCard;