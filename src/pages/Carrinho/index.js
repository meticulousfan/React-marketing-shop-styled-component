import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Compras, SubContainer, Subtotal } from './styled';
import CardProduto from '../../components/Cards/CardProduto';
import {
    itemsCartSelector,
    calculateTotalSelector,
    removeCartItem,
} from '../../store/modules/cache/cart';
import { Link } from 'react-router-dom';

export default function Carrinho() {
    const dispatch = useDispatch();

    const items = useSelector(itemsCartSelector);
    const total = useSelector(calculateTotalSelector);

    return (
        <Container>
            {items.length === 0 ? (
                <div>
                    <h1>Você não possui nenhum produto no carrinho</h1>
                    <Link to={'/'}>
                        <button className="btn btn-primary">
                            Ir as compras
                        </button>
                    </Link>
                </div>
            ) : (
                <div>
                    {items.map((item, index) => {
                        return (
                            <div key={String(index)}>
                                <SubContainer>
                                    <div className="d-flex produto">
                                        <CardProduto item={item} />
                                        <Subtotal>
                                            <RiDeleteBin5Line
                                                className="link-danger"
                                                size={30}
                                                onClick={() => {
                                                    dispatch(
                                                        removeCartItem(item.id)
                                                    );
                                                }}
                                            />

                                            <h5 className="d-flex">
                                                Qtd:
                                                <input
                                                    type={'number'}
                                                    defaultValue={item.qtd}
                                                ></input>
                                            </h5>
                                            <h4 className="d-flex">
                                                Subtotal R$:
                                                {item.qtd * item.valor}
                                            </h4>
                                        </Subtotal>
                                    </div>
                                </SubContainer>
                            </div>
                        );
                    })}
                    <Compras>
                        <div>
                            <Link to={'/compra/'}>
                                <button>Comprar</button>
                            </Link>
                        </div>
                        <div className="total">
                            <h4>Total: {total}</h4>
                        </div>
                    </Compras>
                </div>
            )}
        </Container>
    );
}
