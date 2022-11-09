import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_LOJA_SUCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.isLoading = false;

            return newState;
        }

        case types.LOGIN_LOJA_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.LOGIN_LOJA_FAILURE: {
            delete axios.defaults.headers.Authorization;
            const newState = { ...initialState };
            return newState;
        }

        case types.REGISTER_LOJA_CREATE_SUCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        case types.REGISTER_LOJA_UPDATE_SUCESS: {
            const newState = { ...state };
            newState.user.nome = action.payload.nome;
            newState.user.email = action.payload.email;
            newState.isLoading = false;
            return newState;
        }

        case types.REGISTER_LOJA_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.REGISTER_LOJA_FAILURE: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        default: {
            return state;
        }
    }
}
