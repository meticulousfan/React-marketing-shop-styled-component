import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
    favoritos: [],
    carrinho: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.CART_SUCESS: {
            const newState = { ...state };
            newState.carrinho.push(action.payload);

            return newState;
        }

        case types.CART_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.CART_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }

        case types.CART_UPDATE_SUCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        case types.FAVORITE_SUCESS: {
            const newState = { ...state };
            newState.favoritos.push(action.payload);

            return newState;
        }

        case types.FAVORITE_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.FAVORITE_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }

        case types.FAVORITE_UPDATE_SUCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        default: {
            return state;
        }
    }
}
