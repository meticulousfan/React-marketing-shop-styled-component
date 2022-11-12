import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'OnlineShop',
            storage,
            whitelist: ['auth', 'authLoja'],
        },
        reducers
    );

    return persistedReducer;
};
