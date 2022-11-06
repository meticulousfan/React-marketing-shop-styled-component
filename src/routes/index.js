import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import MyRoute from './MyRoute';

import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Produto from '../pages/Produto';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path={'/'} element={<Alunos />} isClosed={false} />
            <Route path={'/produto'} element={<Produto />} />
            <Route
                path={'/register/'}
                element={<Register />}
                isClosed={false}
            />
            <Route path={'/login/'} element={<Login />} isClosed={false} />
            <Route path={'*'} element={<Page404 />} />
        </Routes>
    );
}
