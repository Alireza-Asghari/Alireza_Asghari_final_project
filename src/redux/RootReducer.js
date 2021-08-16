import {combineReducers} from 'redux'

import CartReducer from './cartReducer/CartReducer'
import LogReducer from './logInReducer/logReducer'

const RootReducer =combineReducers({
    cart:CartReducer,
    user:LogReducer,
})
export default RootReducer