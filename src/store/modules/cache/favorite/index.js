import { createReducer, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export class FavoriteItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { qtd: 1 });
    }
}

const INITIAL_STATE = [];

export const addFavoriteItem = createAction('FAVORITE/ADD_ITEM');
export const removeFavoriteItem = createAction('FAVORITE/REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addFavoriteItem]: (state, action) => verifyExistsItem(state, action),
    [removeFavoriteItem]: (state, action) =>
        state.filter((item) => item.id !== action.payload),
});

function verifyExistsItem(state, action) {
    const newItem = new FavoriteItem(action.payload);

    const existsItem = state.some((item) => item.id === newItem.id);

    if (existsItem) {
        return state.map((item) => {
            return item.id === newItem.id ? { ...item } : item;
        });
    }

    return [...state, newItem];
}

export const favoriteQuantitySelector = (state) => state.favorite.lenght;
export const itemsFavoriteSelector = (state) => state.favorite;
