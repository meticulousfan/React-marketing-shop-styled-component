import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
    isLoggedIn: false,
    token_de_acesso: false,
    loja: {},
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_LOJA_SUCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token_de_acesso = action.payload[0];
            newState.loja = action.payload[1];
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
            console.log(newState);
            newState.isLoggedIn = true;
            newState.token_de_acesso = action.payload[0];
            newState.loja = action.payload[1];
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
