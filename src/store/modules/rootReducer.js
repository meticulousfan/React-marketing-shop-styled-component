import { combineReducers } from 'redux';

import auth from './auth/reducer';
import authLoja from './authLoja/reducer';

export default combineReducers({
    auth,
    authLoja,
});
