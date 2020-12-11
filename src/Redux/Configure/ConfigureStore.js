import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';
import RootReducer from "../Reducers/RootReducer";

const configureStore=()=>{
    const store=createStore(RootReducer,devToolsEnhancer())

    return store;
}

export default configureStore;