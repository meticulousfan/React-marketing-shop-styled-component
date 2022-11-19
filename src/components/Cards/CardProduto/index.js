import React from 'react';
import { GiClothes } from 'react-icons/gi';

import { ContainerProduto } from './styled';

export default function CardProduto(props) {
    const item = props.item;

    return (
        <ContainerProduto>
            <div className="info-produto">
                <div className="imagem">
                    <img
                        src={
                            item.imagens ? (
                                item.imagens[0]?.url_imagem
                            ) : (
                                <GiClothes />
                            )
                        }
                    />
                </div>
                <div className="info">
                    <h4>{item.nome}</h4>
                    <p>{item.descricao}</p>
                    <h3>{item.valor}</h3>
                </div>
            </div>
        </ContainerProduto>
    );
}
