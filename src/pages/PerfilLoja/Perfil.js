import React from 'react';
import { Outlet } from 'react-router-dom';
import RotasPerfilLoja from './Routes';
import TopicosPerfilLoja from './TopicosPerfil';

export default function PerfilLoja() {
    return (
        <div className="d-flex">
            <TopicosPerfilLoja />
            <RotasPerfilLoja />
            <Outlet />
        </div>
    );
}
