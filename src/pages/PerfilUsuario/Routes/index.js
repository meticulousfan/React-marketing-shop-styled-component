import { Outlet, Route, Routes } from 'react-router-dom';
import Ajuda from '../Ajuda';
import TopicosPerfil from '../TopicosPerfil';

export default function PerfilUsuario() {
    return (
        <>
            <TopicosPerfil />
            <Routes>
                <Route path="ajuda" element={<Ajuda />} />
                <Route path="configurações" element={<Ajuda />} />
                <Route path="dados-perfil" element={<Ajuda />} />
                <Route path="favoritos" element={<Ajuda />} />
                <Route path="minhas-compras" element={<Ajuda />} />
            </Routes>
        </>
    );
}
