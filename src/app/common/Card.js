
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import CommonButton from './CommonButton';

function ProductCard({props}) {
  return (
    <Card  className='card' border='0'>
      <Card.Img variant="top" src={props.imageURL} height={200}  />
      <div className='card-hover-sec' >
      
         <span>{props.disc}</span> 
      
         <CommonButton title={props.buttonTitle} className={props.className}/> 
      </div>
      <Card.Body className='card-body' >
        <Card.Title className='card-title'>{props.title}</Card.Title>
        <Card.Text className='card-text'>${props.price} <span>{props.allprice}</span></Card.Text>
        <div className='card-rating'>
          {
           props.children
          }
        </div>
      </Card.Body>
    </Card>
  );
}

export const Ratings = ({ Rate }) => {

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