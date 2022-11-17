import * as types from '../types';

export function CartRequest(payload) {
    return {
        type: types.CART_REQUEST,
        payload,
    };
}

export function CartSucess(payload) {
    return {
        type: types.CART_SUCESS,
        payload,
    };
}

export function CartFailure(payload) {
    return {
        type: types.CART_FAILURE,
        payload,
    };
}

export function CartUpdateSucess(payload) {
    return {
        type: types.CART_UPDATE_SUCESS,
        payload,
    };
}

export function FavoriteUpdateSucess(payload) {
    return {
        type: types.FAVORITE_UPDATE_SUCESS,
        payload,
    };
}

export function FavoriteSucess(payload) {
    return {
        type: types.FAVORITE_SUCESS,
        payload,
    };
}

export function FavoriteRequest(payload) {
    return {
        type: types.FAVORITE_REQUEST,
        payload,
    };
}

export function FavoriteFailure(payload) {
    return {
        type: types.FAVORITE_FAILURE,
        payload,
    };
}
