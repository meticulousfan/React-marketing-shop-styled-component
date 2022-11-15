import React from 'react';
import CardProduto from '../../../components/Cards/CardProduto';
import { Produtos } from './styled';

export default function MeusProdutos() {
    return (
        <Produtos>
            <title>
                <h1>Meus Produtos</h1>
            </title>
            <div className="overflow-auto">
                <CardProduto />
            </div>
        </Produtos>
    );
}
