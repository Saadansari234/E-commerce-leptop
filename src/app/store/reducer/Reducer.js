
import Action from "../action/Action";
export const initialState = {
    signup: [],
    Isloggedin: false,
    cartdata: [],
    orderCart:[],
}

const { SIGNUP, LOGIN, LOGOUT, ADDTOCART, REMOVECART, ADDORDER } = Action

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
        case LOGIN: return state = true
        case LOGOUT: return state = false

        default: return state
    }
}

export const addtocart = (state = initialState.cartdata, action) => {
    switch (action.type) {
        case ADDTOCART:
            return [
                ...state,
                action.payload
            ]

        case REMOVECART:
            return state.filter((_, index) => index !== action.payload);

        default: return state
    }
}

export const addtoOrder = (state = initialState.orderCart, action) => {
    switch (action.type) {
        case ADDORDER:
            return [
                ...state,
                action.payload
            ]

        default: return state
    }
}