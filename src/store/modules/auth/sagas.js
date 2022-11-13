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

        axios.defaults.headers.Authorization = `Bearer ${response.data.token_de_acesso}`;
    } catch (e) {
        yield put(actions.LoginFailure());
        toast.error('Usuário ou senha incorretos.');
        return false;
    }
}

function* registerRequest({ payload }) {
    const { nome, email, senha, CPF } = payload;

    try {
        yield call(axios.post, '/usuario/cadastro', {
            nome,
            sobrenome: 'qualquer',
            email,
            senha,
            CPF,
        });
        toast.success('Usuario criado com sucesso.');
        yield put(
            actions.registerCreateSucess({ nome, sobrenome, email, senha, CPF })
        );
    } catch (e) {
        const errors = get(e, 'response.data.erros', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('Voçê precisa fazer login novamente.');
            yield put(actions.LoginFailure());
            return status;
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error('error'));
        } else {
            toast.error('Erro desconhecido');
        }

        yield put(actions.registerFailure());
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
