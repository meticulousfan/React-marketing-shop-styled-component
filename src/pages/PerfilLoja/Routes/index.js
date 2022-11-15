import { Outlet, Route, Routes } from 'react-router-dom';
import Ajuda from '../Ajuda/index';
import Configuracoes from '../Configuracoes';
import MeusProdutos from '../MeusProdutos';
import DadosPerfilLoja from '../DadosPerfil/index';

export default function RotasPerfilLoja() {
    return (
        <Routes>
            <Route path="ajuda" element={<Ajuda />} />
            <Route path="configuracoes" element={<Configuracoes />} />
            <Route path="dados-loja" element={<DadosPerfilLoja />} />
            <Route path="meus-produtos" element={<MeusProdutos />} />
        </Routes>
    );
}
