import { Outlet, Route, Routes } from 'react-router-dom';
import Ajuda from '../Ajuda';
import DadosPerfil from '../DadosPerfil/index';
import TopicosPerfil from '../TopicosPerfil';

export default function PerfilUsuario() {
    return (
        <Routes>
            <Route path="ajuda" element={<Ajuda />} />
            <Route path="configurações" element={<Ajuda />} />
            <Route path="/" element={<DadosPerfil />} />
            <Route path="favoritos" element={<Ajuda />} />
            <Route path="minhas-compras" element={<Ajuda />} />
        </Routes>
    );
}
