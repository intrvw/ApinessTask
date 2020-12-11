import { combineReducers } from 'redux';
import LoginDataReducer from './LoginReducer';
import UserDataReducer from './UserReducer';



const RootReducer=combineReducers({
    LoginDataReducer:LoginDataReducer,
    UserDataReducer:UserDataReducer
})

export default RootReducer;