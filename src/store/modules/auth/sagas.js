import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* LoginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/login', payload);
        yield put(actions.LoginSucess({ ...response.data }));

        toast.success('Voçê logou com sucesso!');

        axios.defaults.headers.Authorization = `Bearer ${response.data[0]}`;
    } catch (e) {
        yield put(actions.LoginFailure());
        toast.error('Usuário ou senha incorretos.');
        return false;
    }
}

function* registerRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/usuario/cadastro', payload);
        yield put(actions.registerCreateSucess({ ...response.data }));
        toast.success('Usuario criado com sucesso.');
    } catch (e) {
        console.log(e);
        yield put(actions.registerFailure());
        return false;
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');

    if (!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, LoginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
