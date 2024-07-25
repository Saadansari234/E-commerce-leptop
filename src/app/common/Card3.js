
import Card from 'react-bootstrap/Card';
import CommonButton from './CommonButton';
// import Ratings from './Rtaing';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard2 = ({ children, imgURL, onClick1, onclick2 }) => {
    const isLoggedin = useSelector(state => state.LoginInfo)
    const navigate = useNavigate()

    const handleLogin = () => {
        alert("please login first")
        navigate("/login")
    }
    return (
        <div className='d-flex justify-content-center'>

            <Card className='card' border='0'>
                <Card.Img variant="top" src={imgURL} className='card-img' height={200} />
                <div className='card-hover-sec d-flex flex-column justify-content-end  ' >
                    <div className='d-flex'>
                        {
                            isLoggedin ? (
                                <CommonButton title="Add To Cart" onClick={onClick1} className="card-button1" />
                            ) : (
                                <CommonButton title="Add To Cart" onClick={handleLogin} className="card-button1" />
                            )
                        }
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
                    {
                        isLoggedin ? (
                            <CommonButton title="view" onClick={onclick2} className="card-button2" />
                        ) : (
                            <CommonButton title="view" onClick={handleLogin} className="card-button2" />
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard2