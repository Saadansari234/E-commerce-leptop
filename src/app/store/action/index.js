import Action from "./Action";

export const signUp= (data) =>{
    return{
        type:Action.SIGNUP,    
        payload: data
    
    }
}
export const logIn= () =>{
    return{
        type:Action.LOGIN,    
    }
}
export const logOut= () =>{
    return{
        type:Action.LOGOUT,    
    }
}