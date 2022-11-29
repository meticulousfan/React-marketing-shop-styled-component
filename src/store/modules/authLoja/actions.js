import * as types from '../types';

export function LoginLojaRequest(payload) {
    return {
        type: types.LOGIN_LOJA_REQUEST,
        payload,
    };
}

export function LoginLojaSucess(payload) {
    return {
        type: types.LOGIN_LOJA_SUCESS,
        payload,
    };
}

export function LoginLojaFailure(payload) {
    return {
        type: types.LOGIN_LOJA_FAILURE,
        payload,
    };
}

export function registerLojaCreateSucess(payload) {
    return {
        type: types.REGISTER_LOJA_CREATE_SUCESS,
        payload,
    };
}

export function registerLojaRequest(payload) {
    return {
        type: types.REGISTER_LOJA_REQUEST,
        payload,
    };
}

export function registerLojaFailure(payload) {
    return {
        type: types.REGISTER_LOJA_FAILURE,
        payload,
    };
}
