import {createStore,compose} from 'redux'
/*import { createStore } from 'redux';*/
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from './RootReducer';
/*import RootReducer from './RootReducer'*/
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
/*const store =createStore(RootReducer,enhancers)*/

/*export default store*/
const persistConfig = {
 key: 'root',
 storage: storage,
 whitelist:['cart','user']
};

const pReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(pReducer,enhancers);
export const persistor = persistStore(store);