import React from 'react';
import { Outlet } from 'react-router-dom';
import PerfilUsuario from './Routes';
import { PaginaPerfil } from './styled';

import TopicosPerfil from './TopicosPerfil';

export default function Perfil() {
    return (
        <div className="d-flex">
            <TopicosPerfil />
            <PerfilUsuario />
            <Outlet />
        </div>
    );
}
