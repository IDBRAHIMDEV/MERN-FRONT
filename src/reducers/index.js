
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    cart: cartReducer
})

export default rootReducers;