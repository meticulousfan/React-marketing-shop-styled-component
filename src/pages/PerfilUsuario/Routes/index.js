import { Outlet, Route, Routes } from 'react-router-dom';
import Ajuda from '../Ajuda/index';
import DadosPerfil from '../DadosPerfil/index';
import Favoritos from '../../Favoritos/index';
import MinhasCompras from '../MinhasCompras';
import Configuracoes from '../Configuracoes';

export default function PerfilUsuario() {
    return (
        <Routes>
            <Route path="ajuda" element={<Ajuda />} />
            <Route path="configuracoes" element={<Configuracoes />} />
            <Route path="dados-perfil" element={<DadosPerfil />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="minhas-compras" element={<MinhasCompras />} />
        </Routes>
    );
}
