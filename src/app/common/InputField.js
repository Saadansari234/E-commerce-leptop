
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const InputField = (props) => {
    return (
        <InputGroup className={props.class2} >
            <Form.Control
                placeholder={props.placeholder}
                aria-label={props.arialabel}
                aria-describedby="basic-addon1"
                className={props.className}
                type={props.type}
                onChange={props.onChange}
                required
            />
        </InputGroup>
    )
}

export default InputField