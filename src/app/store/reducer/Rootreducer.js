import { signupInfo , LoginInfo, addtocart, addtoOrder} from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    signupInfo,
    LoginInfo,
    addtocart,
    addtoOrder
    
})

export default RootReducer