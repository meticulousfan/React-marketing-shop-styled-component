import React from 'react';
import CardProduto from '../../../components/Cards/CardProduto';
import { Compras } from './styled';

export default function MinhasCompras() {
    return (
        <Compras>
            <title>
                <h1>Minhas Compras</h1>
            </title>
            <div className="overflow-auto">
                <CardProduto />
            </div>
        </Compras>
    );
}
