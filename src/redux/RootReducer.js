import {combineReducers} from 'redux'

import CartReducer from './cartReducer/CartReducer'

const RootReducer =combineReducers({
    cart:CartReducer
})

export default RootReducer