import React from 'react';
import { Painel } from './styled';
import { MdOutlineDataSaverOff, MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import { BsGearWideConnected } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

export default function TopicosPerfil() {
    return (
        <Painel>
            <div>
                <BiUserCircle size={100} />
                <h4>Nome</h4>
            </div>
            <li>
                <ul>
                    Meus Dados
                    <MdOutlineDataSaverOff />
                </ul>
                <ul>
                    Favoritos
                    <MdOutlineFavoriteBorder />
                </ul>
                <ul>
                    Minhas Compras
                    <FiShoppingBag />
                </ul>
                <ul>
                    Configurações
                    <BsGearWideConnected />
                </ul>
                <ul>
                    Ajuda
                    <FiHelpCircle />
                </ul>
            </li>
        </Painel>
    );
}
