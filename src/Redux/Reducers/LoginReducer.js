import { Login_Data } from "../ActionConstants"

const initialState ={
    loginDetails:{
        username:"hruday@gmail.com",
        password :'hruday123'
    }
}

const LoginDataReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Login_Data:
            return {...state,loginDetails:action.payload}
        default:
            return state
    }
}

export default LoginDataReducer;