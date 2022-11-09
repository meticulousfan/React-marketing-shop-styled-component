import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* LoginLojaRequest({ payload }) {
    const navigate = useNavigate();

    try {
        const response = yield call(axios.post, '/loja/login', payload);
        yield put(actions.LoginLojaSucess({ ...response.data }));

        toast.success('Voçê logou com sucesso!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token_de_acesso}`;
    } catch (e) {
        yield put(actions.LoginLojaFailure());
        toast.error('Usuário ou senha incorretos.');
    }
}

function* registerLojaRequest({ payload }) {
    const { nome_fantasia, email, senha, CNPJ, loja_id } = payload;

    try {
        if (loja_id) {
            yield call(axios.put, `/loja/${loja_id}`, {
                nome_fantasia,
                email,
                senha: senha || undefined,
                CNPJ,
            });
            toast.success('Conta alterada com sucesso.');
            yield put(
                actions.registerLojaUpdateSucess({
                    nome_fantasia,
                    email,
                    senha,
                    CNPJ,
                })
            );
        } else {
            yield call(axios.post, '/loja/cadastro', {
                nome_fantasia,
                email,
                senha,
                CNPJ,
            });
            toast.success('Usuario criado com sucesso.');
            yield put(
                actions.registerLojaCreateSucess({
                    nome_fantasia,
                    email,
                    senha,
                    CNPJ,
                })
            );
        }
    } catch (e) {
        const errors = get(e, 'response.data.erros', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('Voçê precisa azer login novamente.');
            yield put(actions.LoginLojaFailure());
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Erro desconhecido');
        }

        yield put(actions.registerLojaFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'authLoja.token', '');

    if (!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_LOJA_REQUEST, LoginLojaRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_LOJA_REQUEST, registerLojaRequest),
]);
