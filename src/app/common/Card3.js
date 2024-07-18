
import Card from 'react-bootstrap/Card';
import CommonButton from './CommonButton';
// import Ratings from './Rtaing';

const ProductCard2 = ({ children }) => {
    return (
        <Card className='card' border='0'>
            <Card.Img variant="top" src="./assets/lep-1.jpg" height={200} />
            <div className='card-hover-sec d-flex flex-column justify-content-end  ' >
                <div className='d-flex'>
                     <CommonButton title="Add To Cart" className="card-button1" />
                </div>
            </div>
            <Card.Body className='card-body' >
                <Card.Title className='card-title'>IPS LCD Gaming Monitor</Card.Title>
                <Card.Text className='card-text'>$960 </Card.Text>
                <div className='card-rating'>
                    {
                        children
                    }
                </div>
                <CommonButton title="view" className="card-button2" />
            </Card.Body>
        </Card>
    )
}

export default ProductCard2