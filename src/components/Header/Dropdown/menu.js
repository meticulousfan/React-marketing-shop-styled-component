import { FaUserCircle } from 'react-icons/fa';
import { FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import { MdPowerSettingsNew, MdSettings } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../store/modules/auth/actions';
import { Div } from './styled';

export default function MenuDrop() {
    const dispatch = useDispatch();

    return (
        <Div>
            <ul id="menu">
                <li>
                    <div>
                        <Link to="/perfil-usuario/dados-perfil">
                            <FaUserCircle size={70} />
                            <h3>Nome</h3>
                        </Link>
                    </div>
                </li>
                <li>
                    <Link to="/perfil-usuario/minhas-compras">
                        <FiShoppingBag size={24} />
                        Minhas Compras
                    </Link>
                </li>
                <li>
                    <Link to="/perfil-usuario/ajuda">
                        <FiHelpCircle size={24} />
                        Ajuda
                    </Link>
                </li>
                <li>
                    <Link to="/perfil-usuario/configuracoes">
                        <MdSettings size={24} />
                        Configurações
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(actions.LoginFailure());
                        }}
                    >
                        <MdPowerSettingsNew size={24} />
                        Logout
                    </Link>
                </li>
            </ul>
        </Div>
    );
}
