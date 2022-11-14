import { Outlet, Route, Routes } from 'react-router-dom';
import Ajuda from '../Ajuda';

export default function PerfilUsuario() {
    return (
        <Routes>
            <Route path="/ajuda/" element={<Ajuda />} />
            <Outlet />
        </Routes>
    );
}
