
import Card from 'react-bootstrap/Card';
import CommonButton from './CommonButton';
// import Ratings from './Rtaing';

const ProductCard2 = ({ children, imgURL, onClick1, onclick2 }) => {
    return (
        <div className='d-flex justify-content-center'>

        <Card className='card' border='0'>
            <Card.Img variant="top" src={imgURL} className='card-img'  height={200} />
            <div className='card-hover-sec d-flex flex-column justify-content-end  ' >
                <div className='d-flex'>
                     <CommonButton title="Add To Cart" onClick={onClick1} className="card-button1" />
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
                <CommonButton title="view" onClick={onclick2} className="card-button2" />
            </Card.Body>
        </Card>
        </div>
    )
}

export default ProductCard2