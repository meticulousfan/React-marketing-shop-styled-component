import { combineReducers } from 'redux';

import auth from './auth/reducer';
import authLoja from './authLoja/reducer';
import cache from './cache/reducer';

export default combineReducers({
    auth,
    cache,
    authLoja,
});
