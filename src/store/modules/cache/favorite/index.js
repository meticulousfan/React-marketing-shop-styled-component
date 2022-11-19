import { createReducer, createAction } from '@reduxjs/toolkit';

export class FavoriteItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { qtd: 1 });
    }
}

const INITIAL_STATE = {
    items: [],
};

export const addFavoriteItem = createAction('FAVORITE/ADD_ITEM');

export default createReducer(INITIAL_STATE, {
    [addFavoriteItem]: (state, action) => ({
        items: [...state.items, new FavoriteItem(action.payload)],
    }),
});

export const favoriteQuantitySelector = (state) => state.favorite.items.lengh;
export const itemsFavoriteSelector = (state) => state.favorite.items;
