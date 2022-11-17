import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import authLoja from './authLoja/sagas';
import cache from './cache/sagas';

export default function* rootSaga() {
    return yield all([auth, cache, authLoja]);
}
