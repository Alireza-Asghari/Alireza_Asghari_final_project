import {combineReducers} from 'redux'

import CartReducer from './cartReducer/CartReducer'
import LogReducer from './logInReducer/logReducer'
import ConReducer from './product.conc'

const RootReducer =combineReducers({
    cart:CartReducer,
    user:LogReducer,
    conc:ConReducer
})

export default RootReducer