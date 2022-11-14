import React from 'react';
import { Outlet } from 'react-router-dom';
import PerfilUsuario from './Routes';

import TopicosPerfil from './TopicosPerfil';

export default function Perfil() {
    return (
        <div>
            <TopicosPerfil />
        </div>
    );
}
