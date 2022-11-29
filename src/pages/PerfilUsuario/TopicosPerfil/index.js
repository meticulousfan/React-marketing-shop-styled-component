import React from 'react';
import { MdOutlineDataSaverOff, MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingBag, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { BsGearWideConnected } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

import { Painel } from '../../../styles/GlobalStyles';
import { SideBar } from './styled';

export default function TopicosPerfil() {
    const usuario = useSelector((state) => state.auth.usuario);

    return (
        <Painel>
            <SideBar>
                <div>
                    {usuario.img_perfil_usuario ? (
                        <img
                            src={usuario.img_perfil_usuario}
                            alt="foto de perfil do usuário"
                        />
                    ) : (
                        <FaUserCircle size={100} />
                    )}
                    <h4>{usuario.nome}</h4>
                </div>
                <li>
                    <Link to="dados-perfil">
                        <ul>
                            Meus Dados
                            <MdOutlineDataSaverOff />
                        </ul>
                    </Link>
                    <Link to="favoritos">
                        <ul>
                            Favoritos
                            <MdOutlineFavoriteBorder />
                        </ul>
                    </Link>
                    <Link to="minhas-compras">
                        <ul>
                            Minhas Compras
                            <FiShoppingBag />
                        </ul>
                    </Link>
                    <Link to="configuracoes">
                        <ul>
                            Configurações
                            <BsGearWideConnected />
                        </ul>
                    </Link>
                    <Link to="ajuda">
                        <ul>
                            Ajuda
                            <FiHelpCircle />
                        </ul>
                    </Link>
                    <Link to="Sair">
                        <ul>
                            Sair
                            <FiLogOut />
                        </ul>
                    </Link>
                </li>
            </SideBar>
        </Painel>
    );
}
