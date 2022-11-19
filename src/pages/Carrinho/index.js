import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Compras, SubContainer, Subtotal } from './styled';
import CardProduto from '../../components/Cards/CardProduto';
import {
    itemsCartSelector,
    calculateTotalSelector,
} from '../../store/modules/cache/cart';

export default function Carrinho() {
    const dispatch = useDispatch();

    const items = useSelector(itemsCartSelector);
    const total = useSelector(calculateTotalSelector);

    const [subtotal, setSubtotal] = useState(0);

    return (
        <Container>
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
                                    />

                                    <h5 className="d-flex">
                                        Qtd:
                                        <input
                                            type={'number'}
                                            defaultValue={item.qtd}
                                        ></input>
                                    </h5>
                                    <h4 className="d-flex">
                                        Subtotal R$:{item.qtd * item.valor}
                                    </h4>
                                </Subtotal>
                            </div>
                        </SubContainer>
                    </div>
                );
            })}
            <Compras>
                <div>
                    <button>Comprar</button>
                </div>
                <div className="total">
                    <h4>Total: {total}</h4>
                </div>
            </Compras>
        </Container>
    );
}
