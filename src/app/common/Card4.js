
import Card from 'react-bootstrap/Card';
import CommonButton from './CommonButton';
import { RxCross2 } from "react-icons/rx";

// import Ratings from './Rtaing';

const ProductCard3 = ({ children, imgURL, onClick1, onclick2 }) => {
    return (
        <div className='d-flex justify-content-center'>

            <Card className='card' border='0'>
                <Card.Img variant="top" src={imgURL} className='card-img' height={200} />
                <div className='card-hover-sec d-flex flex-column justify-content-start align-items-end  ' >
                    <div className='cancel-button' onClick={onClick1}>

                        <RxCross2 className='cross-button' />
                    </div>
                </div>
                <Card.Body className='card-body' >
                    <Card.Title className='card-title'>IPS LCD Gaming Monitor</Card.Title>
                    <Card.Text className='card-text'>$960 </Card.Text>
                    <CommonButton title="view" onClick={onclick2} className="card-button2" />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard3