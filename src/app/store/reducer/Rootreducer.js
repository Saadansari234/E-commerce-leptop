import { signupInfo , LoginInfo} from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    signupInfo,
    LoginInfo,
    
})

export default RootReducer