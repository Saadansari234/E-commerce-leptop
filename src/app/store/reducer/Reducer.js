
import Action from "../action/Action";
export const initialState = {
    signup: [],
    Isloggedin: true,
}

const { SIGNUP, LOGIN, LOGOUT } = Action

export const signupInfo = (state = initialState.signup, action) => {
    switch (action.type) {
        case SIGNUP:
            return [
                ...state,
                action.payload
            ]
        default: return state
    }
}

export const LoginInfo = (state = initialState.Isloggedin, action) => {
    switch (action.type) {
        case LOGIN:return state = true
        case LOGOUT:return state= false

        default: return state
    }
}