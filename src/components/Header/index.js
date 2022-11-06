import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../assets/Logo.png';

import { Nav } from './styled';
import NavDropdown from './Dropdown';

export default function Header() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <Nav>
            <Link to="/">
                <img src={Logo} />
            </Link>
            <div>
                <Link to="/feminina">Feminino</Link>
                <Link to="/masculina">Masculino</Link>
            </div>
            <div>
                <Link to="/loja">Venda Conosco</Link>
                <div>
                    <Link to="/favoritos">
                        <AiOutlineHeart size={24} />
                    </Link>
                    <Link to="/carrinho">
                        <MdOutlineAddShoppingCart size={24} />
                    </Link>
                    {isLoggedIn ? (
                        <NavDropdown size={24} />
                    ) : (
                        <Link to="/login">
                            <FaRegUser size={24} />
                        </Link>
                    )}
                </div>
            </div>
        </Nav>
    );
}
