import { combineReducers } from 'redux';

import auth from './auth/reducer';
import authLoja from './authLoja/reducer';
import cart from './cache/cart';
import favorite from './cache/favorite';

export default combineReducers({
    auth,
    cart,
    favorite,
    authLoja,
});
