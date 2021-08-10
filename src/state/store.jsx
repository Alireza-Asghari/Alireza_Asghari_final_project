import { createStore, applyMiddleware } from "redux";
import {reducers} from "./reducers/combineReducer";
import thunk from 'redux-thunk';
import { persistStore } from "redux-persist";
import logger from 'redux-logger'
import { persistedReducer } from "./reducers/combineReducer";


const middlewares = [logger]



export const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middlewares,thunk),
)   

export const persistor = persistStore(store);
