import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import MainRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header />
                <MainRoutes />
                <GlobalStyles />
                <ToastContainer autoClose={3000} className="toast-container" />
                {/* <Footer /> */}
            </PersistGate>
        </Provider>
    );
}

export default App;
