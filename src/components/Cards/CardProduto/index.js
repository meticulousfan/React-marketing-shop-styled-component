import React from 'react';

import { ContainerProduto } from './styled';

export default function CardProduto(props) {
    return (
        <ContainerProduto>
            <div className="info-produto">
                <div className="imagem">
                    <img src={props.imagem} />
                </div>
                <div className="info">
                    <h4>{props.nome}</h4>
                    <p>{props.descricao}</p>
                    <h3>{props.valor}</h3>
                </div>
            </div>
        </ContainerProduto>
    );
}
