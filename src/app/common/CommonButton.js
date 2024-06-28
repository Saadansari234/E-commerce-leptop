
import { Button } from 'react-bootstrap'
const CommonButton = (props) => {
  return (
  <Button color={props.color} className={props.className} onClick={props.onClick}>
    {props.title}
  </Button>
  )
}

export default CommonButton