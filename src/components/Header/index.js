import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../assets/Logo.png';

import { Nav } from './styled';
import NavDropdown from './Dropdown';
import { itemsCartSelector } from '../../store/modules/cache/cart';
import { itemsFavoriteSelector } from '../../store/modules/cache/favorite';

export default function Header() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const cartItems = useSelector(itemsCartSelector);
    const favoriteItems = useSelector(itemsFavoriteSelector);

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
                <Link to="/login-loja">Venda Conosco</Link>
                <div>
                    <Link to="/favoritos" className="favorite">
                        <p>{favoriteItems.length}</p>
                        <AiOutlineHeart size={24} />
                    </Link>
                    <Link to="/carrinho" className="cart">
                        <p>{cartItems.length}</p>
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
