import React from 'react';
import { Painel } from '../../../styles/GlobalStyles';
import { MdOutlineDataSaverOff, MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import { BsGearWideConnected } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { SideBar } from './styled';
import { Link } from 'react-router-dom';

export default function TopicosPerfil() {
    return (
        <Painel>
            <SideBar>
                <div>
                    <BiUserCircle size={100} />
                    <h4>Nome</h4>
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
                </li>
            </SideBar>
        </Painel>
    );
}
