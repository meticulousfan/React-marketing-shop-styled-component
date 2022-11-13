import React, { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

import CardProduto from '../../components/Cards/CardProduto';
import { SubContainer, Subtotal } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

export default function Favoritos() {
    const [subtotal, setSubtotal] = useState(0);

    return (
        <Container>
            <SubContainer>
                <div className="d-flex produto">
                    <CardProduto />
                    <Subtotal>
                        <button className="excluir">
                            <RiDeleteBin5Line size={30} />
                            Remover
                        </button>
                        <button className="adicionar">
                            <MdOutlineAddShoppingCart size={30} />
                            Adicionar
                        </button>
                    </Subtotal>
                </div>
            </SubContainer>
        </Container>
    );
}
