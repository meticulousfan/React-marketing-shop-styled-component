import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import CardProduto from '../../components/Cards/CardProduto';
import { SubContainer, Subtotal } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { itemsFavoriteSelector } from '../../store/modules/cache/favorite';
import { addCartItem } from '../../store/modules/cache/cart';

export default function Favoritos() {
    const dispatch = useDispatch();
    const items = useSelector(itemsFavoriteSelector);

    return (
        <Container>
            {items.map((item, index) => {
                return (
                    <SubContainer key={index}>
                        <div className="d-flex produto">
                            <CardProduto item={item} />
                            <Subtotal>
                                <button className="excluir">
                                    <RiDeleteBin5Line size={30} />
                                    Remover
                                </button>
                                <button
                                    className="adicionar"
                                    onClick={(e) => {
                                        toast.success(
                                            'Produto adicionado ao Carrinho'
                                        );
                                        dispatch(addCartItem(item));
                                    }}
                                >
                                    <MdOutlineAddShoppingCart size={30} />
                                    Adicionar
                                </button>
                            </Subtotal>
                        </div>
                    </SubContainer>
                );
            })}
        </Container>
    );
}
