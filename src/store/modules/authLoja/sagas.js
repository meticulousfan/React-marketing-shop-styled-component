import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* LoginLojaRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/loja/login', payload);
        yield put(actions.LoginLojaSucess({ ...response.data }));

        toast.success('Voçê logou com sucesso!');
        axios.defaults.headers.Authorization = `Bearer ${response.data[0]}`;
    } catch (e) {
        yield put(actions.LoginLojaFailure());
        toast.error('Usuário ou senha incorretos.');
    }
}

function* registerLojaRequest({ payload }) {
    console.log(payload);
    try {
        const response = yield call(axios.post, '/loja/cadastro', payload);
        console.log(response.data);
        yield put(actions.registerLojaCreateSucess({ ...response.data }));
        toast.success('Loja criada com sucesso.');
    } catch (e) {
        yield put(actions.registerLojaFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'authLoja.token_de_acesso', '');

    if (!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_LOJA_REQUEST, LoginLojaRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_LOJA_REQUEST, registerLojaRequest),
]);
