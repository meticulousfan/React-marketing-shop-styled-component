import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { Container } from '../../styles/GlobalStyles';
import { Compras, SubContainer, Subtotal } from './styled';
import CardProduto from '../../components/Cards/CardProduto';

export default function Carrinho() {
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <Container>
            <SubContainer>
                <div className="d-flex produto">
                    <CardProduto />
                    <Subtotal>
                        <RiDeleteBin5Line className="link-danger" size={30} />

                        <h5 className="d-flex">
                            Qtd:<input type={'number'}></input>
                        </h5>
                        <h4 className="d-flex">
                            Subtotal R$:
                            <input
                                type={'text'}
                                readOnly
                                value={subtotal}
                            ></input>
                        </h4>
                    </Subtotal>
                </div>
            </SubContainer>
            <Compras>
                <div>
                    <button>Comprar</button>
                </div>
                <div className="total">
                    <h4>Total: {subtotal}</h4>
                </div>
            </Compras>
        </Container>
    );
}
