import { createReducer, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export class FavoriteItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { qtd: 1 });
    }
}

const INITIAL_STATE = {
    items: [],
};

export const addFavoriteItem = createAction('FAVORITE/ADD_ITEM');
export const removeFavoriteItem = createAction('FAVORITE/REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addFavoriteItem]: (state, action) => ({
        items: verifyExistsItem(state, action),
    }),
    [removeFavoriteItem]: (state, action) =>
        state.filter((item) => item.id !== action.payload),
});

function verifyExistsItem(state, action) {
    const newItem = new FavoriteItem(action.payload);

    const existsItem = state.items.some((item) => item.id === newItem.id);

    if (existsItem) {
        return state.items.map((item) => {
            return item.id === newItem.id ? { ...item } : item;
        });
    }

    return [...state.items, newItem];
}

export const favoriteQuantitySelector = (state) => state.favorite.items.lenght;
export const itemsFavoriteSelector = (state) => state.favorite.items;
