import React from 'react';

import { ContainerProduto } from './styled';

export default function CardProduto() {
    return (
        <ContainerProduto>
            <div className="info-produto">
                <div className="imagem">
                    <img src="" />
                </div>
                <div className="info">
                    <h4>Nome</h4>
                    <p>Descrição</p>
                    <h3>Preço</h3>
                </div>
            </div>
        </ContainerProduto>
    );
}
