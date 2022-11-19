import { createReducer, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createSelector } from 'reselect';

export class CartItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { qtd: 1 });
    }
}

const INITIAL_STATE = {
    items: [],
};

export const addCartItem = createAction('CART/ADD_ITEM');

export default createReducer(INITIAL_STATE, {
    [addCartItem]: (state, action) => ({
        items: verifyExistsItem(state, action),
    }),
});

function verifyExistsItem(state, action) {
    const newItem = new CartItem(action.payload);

    const existsItem = state.items.some((item) => item.id === newItem.id);

    if (existsItem) {
        return state.items.map((item) => {
            return item.id === newItem.id
                ? { ...item, qtd: item.qtd + 1 }
                : item;
        });
    }

    return [...state.items, newItem];
}

export const cartQuantitySelector = (state) => state.cart.items.lengh;
export const itemsCartSelector = (state) => state.cart.items;

export const calculateTotalSelector = createSelector(
    itemsCartSelector,
    (items) => {
        return items.reduce((acc, item) => acc + item.valor * item.qtd, 0);
    }
);
