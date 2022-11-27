import React from 'react';
import { useSelector } from 'react-redux';
import { Painel } from '../../../styles/GlobalStyles';
import { MdOutlineDataSaverOff } from 'react-icons/md';
import { FiShoppingBag, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { BsGearWideConnected } from 'react-icons/bs';
import { SideBar } from './styled';
import { Link } from 'react-router-dom';
import { MdStoreMallDirectory } from 'react-icons/md';

export default function TopicosPerfilLoja() {
    const loja = useSelector((state) => state.authLoja.loja);
    console.log(loja);
    return (
        <Painel>
            <SideBar>
                <div>
                    <MdStoreMallDirectory size={100} />
                    <h4>{loja.nome_fantasia}</h4>
                </div>
                <li>
                    <Link to="dados-loja">
                        <ul>
                            Meus Dados
                            <MdOutlineDataSaverOff />
                        </ul>
                    </Link>
                    <Link to="meus-produtos">
                        <ul>
                            Meus Produtos
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
                    <Link>
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
