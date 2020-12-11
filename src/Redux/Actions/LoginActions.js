import { Login_Data } from "../ActionConstants"

export const LoginDataAction=(data)=>{
    return{
        type:Login_Data,
        payload:data
    }
}