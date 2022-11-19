import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import authLoja from './authLoja/sagas';

export default function* rootSaga() {
    return yield all([auth, authLoja]);
}
