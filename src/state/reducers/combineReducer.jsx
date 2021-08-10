import { combineReducers } from "redux";
import {AccountReducer, FetchReducer} from "./accountReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore  } from "redux";



export const reducers = combineReducers({
    account:AccountReducer,
    fetch:FetchReducer,
})

const persistConf={
    key:'root',
    storage,
    whitelist:['fetch']
}


export const persistedReducer = persistReducer(persistConf, reducers)
