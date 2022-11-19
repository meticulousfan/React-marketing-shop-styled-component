import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Compras, SubContainer, Subtotal } from './styled';
import CardProduto from '../../components/Cards/CardProduto';
import Produtos from '../Produtos';

export default function Carrinho() {
    const carrinho = useSelector((state) => state.cache.carrinho);

    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [qtd, setQtd] = useState(1);

    return (
        <Container>
            {carrinho.map((produto, index) => {
                return (
                    <div key={String(index)}>
                        <SubContainer>
                            <div className="d-flex produto">
                                <CardProduto
                                    imagem={
                                        produto.imagens_produto[0]?.url_imagem
                                    }
                                    nome={produto.nome}
                                    descrico={produto.descricao}
                                    valor={produto.valor}
                                />
                                <Subtotal>
                                    <RiDeleteBin5Line
                                        className="link-danger"
                                        size={30}
                                    />

                                    <h5 className="d-flex">
                                        Qtd:
                                        <input
                                            type={'number'}
                                            defaultValue={1}
                                        ></input>
                                    </h5>
                                    <h4 className="d-flex">
                                        Subtotal R$:{' '}
                                        {qtd == 1 ? produto.valor : subtotal}
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
