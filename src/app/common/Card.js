
import Card from 'react-bootstrap/Card';
import CommonButton from './CommonButton';
import Ratings from './Rtaing';
const ProductCard = ({rate,count,imgURL,onClick1,onClick2}) => {
  return (
    <div className='d-flex justify-content-center'>
      <Card className='card' border='0'>

        <Card.Img variant="top" className='card-img' src={imgURL} height={200} />

        <div className='card-hover-sec' >

          <span>-40%</span>

          <CommonButton title="Add To Cart" onClick={onClick1} className="card-button1" />
        </div>
        <Card.Body className='card-body' >
          <Card.Title className='card-title'>IPS LCD Gaming Monitor</Card.Title>
          <Card.Text className='card-text'>$960 <span>$1160</span></Card.Text>
          <div className='card-rating'>
            <Ratings Rate={rate} />
            <div>({count})</div>
          </div>
          <CommonButton title="view" onClick={onClick2} className="card-button2" />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard

