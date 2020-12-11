import {User_Data} from "../ActionConstants"

export const UserDataAction=(data)=>{
    return{
        type:User_Data,
        payload:data
    }
}