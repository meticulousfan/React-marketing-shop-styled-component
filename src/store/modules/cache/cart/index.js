import { createReducer, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createSelector } from 'reselect';

export class CartItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { qtd: 1 });
    }
}

const INITIAL_STATE = [];

export const addCartItem = createAction('CART/ADD_ITEM');
export const removeCartItem = createAction('CART/REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addCartItem]: (state, action) => verifyExistsItem(state, action),
    [removeCartItem]: (state, action) =>
        state.filter((item) => item.id !== action.payload),
});

function verifyExistsItem(state, action) {
    const newItem = new CartItem(action.payload);

    const existsItem = state.some((item) => item.id === newItem.id);

    if (existsItem) {
        return state.map((item) => {
            return item.id === newItem.id
                ? { ...item, qtd: item.qtd + 1 }
                : item;
        });
    }

    return [...state, newItem];
}

export const cartQuantitySelector = (state) => state.cart.lenght;
export const itemsCartSelector = (state) => state.cart;

export const calculateTotalSelector = createSelector(
    itemsCartSelector,
    (items) => {
        return items.reduce((acc, item) => acc + item.valor * item.qtd, 0);
    }
);
