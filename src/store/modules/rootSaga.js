import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import authLoja from './authLoja/sagas';
import favorite from './cache/favorite';
import cart from './cache/cart';

export default function* rootSaga() {
    return yield all([auth, authLoja, favorite, cart]);
}
