import React from 'react';
import { useSelector } from 'react-redux';

import CardProduto from '../../../components/Cards/CardProduto';
import { Produtos } from './styled';

export default function MeusProdutos() {
    const loja = useSelector((state) => state.authLoja.loja);
    console.log(loja);
    return (
        <Produtos>
            <title>
                <h1>Meus Produtos</h1>
            </title>
            {/* {loja.produtos.map
                <div className="overflow-auto">
                    <CardProduto />
                </div>
            } */}
        </Produtos>
    );
}
