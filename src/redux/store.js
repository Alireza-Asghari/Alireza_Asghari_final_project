import {createStore} from 'redux'

import RootReducer from './RootReducer'

const store =createStore(RootReducer)

export default store

/**import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from './RootReducer';/

/*const persistConfig = {
 key: 'cart',
 storage: storage,
 whitelist:['cart']
};

const pReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);*/