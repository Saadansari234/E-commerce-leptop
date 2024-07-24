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

export const addToCart= (data) =>{
    return{
        type:Action.ADDTOCART,  
        payload:data  
    }
}

export const removeFromCart= (data) =>{
    return{
        type:Action.REMOVECART,  
        payload:data  
    }
}

export const addToOrder= (data) =>{
    return{
        type:Action.ADDORDER,  
        payload:data  
    }
}