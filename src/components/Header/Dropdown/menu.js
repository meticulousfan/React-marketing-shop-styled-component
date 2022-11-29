import { FaUserCircle } from 'react-icons/fa';
import { FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import {
    MdPowerSettingsNew,
    MdSettings,
    MdStoreMallDirectory,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../store/modules/auth/actions';
import * as actionsLoja from '../../../store/modules/authLoja/actions';
import { Div } from './styled';

export default function MenuDrop() {
    const dispatch = useDispatch();

    const isLoggedInLoja = useSelector((state) => state.authLoja.isLoggedIn);
    const loja = useSelector((state) => state.authLoja.loja);
    const usuario = useSelector((state) => state.auth.usuario);

    return (
        <Div>
            {isLoggedInLoja ? (
                <ul className="menu">
                    <li>
                        <div>
                            <Link
                                to="/perfil-loja/dados-perfil"
                                className="d-flex flex-column align-items-center"
                            >
                                {loja.img_perfil_loja ? (
                                    <img
                                        src={loja.img_perfil_loja}
                                        alt="foto de perfil da loja"
                                    />
                                ) : (
                                    <MdStoreMallDirectory size={80} />
                                )}
                                <h3>{loja.nome_fantasia}</h3>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/perfil-loja/meus-produtos">
                            <FiShoppingBag size={24} />
                            Meus produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil-loja/configuracoes">
                            <MdSettings size={24} />
                            Configurações
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil-loja/ajuda">
                            <FiHelpCircle size={24} />
                            Ajuda
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(actionsLoja.LoginLojaFailure());
                            }}
                        >
                            <MdPowerSettingsNew size={24} />
                            Sair
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul className="menu">
                    <li>
                        <div>
                            <Link
                                to="/perfil-usuario/dados-perfil"
                                className="d-flex flex-column align-items-center"
                            >
                                {usuario.img_perfil_usuario ? (
                                    <img
                                        src={usuario.img_perfil_usuario}
                                        alt="foto de perfil do usuário"
                                    />
                                ) : (
                                    <FaUserCircle size={80} />
                                )}

                                <h3>
                                    {usuario.nome} {usuario.sobrenome}
                                </h3>
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
                        <Link to="/perfil-usuario/configuracoes">
                            <MdSettings size={24} />
                            Configurações
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil-usuario/ajuda">
                            <FiHelpCircle size={24} />
                            Ajuda
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
                            Sair
                        </Link>
                    </li>
                </ul>
            )}
        </Div>
    );
}
