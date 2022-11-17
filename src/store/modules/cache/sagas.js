import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';

function* CartRequest({ payload }, id) {
    try {
        // const response = yield call(axios.get, `/produto/${id}`, payload);
        yield put(actions.CartSucess({ ...payload }));

        toast.success(`Produto adicionado ao carrinho.`);
    } catch (e) {
        yield put(actions.CartFailure());
        toast.error('Houve um erro ao tentar adicionar o produto ao carrinho.');
        return false;
    }
}

function* FavoriteRequest({ payload }) {
    try {
        // const response = yield call(axios.get, `/produto/${id}`, payload);
        yield put(actions.FavoriteSucess({ ...payload }));

        toast.success(`Produto adicionado aos favoritos.`);
    } catch (e) {
        yield put(actions.FavoriteFailure());
        toast.error('Houve um erro ao tentar adicionar o produto ao carrinho.');
        return false;
    }
}

// function* registerRequest({ payload }) {
//     const { nome, email, senha, CPF } = payload;

//     try {
//         yield call(axios.post, '/usuario/cadastro', {
//             nome,
//             sobrenome: 'qualquer',
//             email,
//             senha,
//             CPF,
//         });
//         toast.success('Usuario criado com sucesso.');
//         yield put(
//             actions.registerCreateSucess({ nome, sobrenome, email, senha, CPF })
//         );
//     } catch (e) {
//         const errors = get(e, 'response.data.erros', []);
//         const status = get(e, 'response.status', 0);

//         if (status === 401) {
//             toast.error('Voçê precisa fazer Cart novamente.');
//             yield put(actions.CartFailure());
//             return status;
//         }

//         if (errors.length > 0) {
//             errors.map((error) => toast.error('error'));
//         } else {
//             toast.error('Erro desconhecido');
//         }

//         yield put(actions.registerFailure());
//     }
// }

// function persistRehydrate({ payload }) {
//     const token = get(payload, 'auth.token', '');

//     if (!token) return;

//     axios.defaults.headers.Authorization = `Bearer ${token}`;
// }

export default all([
    takeLatest(types.CART_REQUEST, CartRequest),
    // takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.FAVORITE_REQUEST, FavoriteRequest),
]);
