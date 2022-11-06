import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import MainRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import Product from './pages/Produto';

function App() {
    return (
        // <Provider store={store}>
        //     <PersistGate persistor={persistor}>
        //         <Router history={history}>
        //             <Header />
        //             <MainRoutes />
        //             <GlobalStyles />
        //             <ToastContainer
        //                 autoClose={3000}
        //                 className="toast-container"
        //             />
        //         </Router>
        //     </PersistGate>
        // </Provider>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header />
                <MainRoutes />
                <GlobalStyles />
                <ToastContainer autoClose={3000} className="toast-container" />
                <Footer />
            </PersistGate>
        </Provider>
    );
}

export default App;
