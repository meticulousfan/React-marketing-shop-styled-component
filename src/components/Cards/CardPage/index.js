import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card } from './styled';
import { addCartItem } from '../../../store/modules/cache/cart';
import { addFavoriteItem } from '../../../store/modules/cache/favorite';

export default function CardPage(props) {
    const dispatch = useDispatch();
    const produto = props.item;

    function handleFavorite() {
        const item = {
            id: produto.produto_id,
            imagens: produto.imagens_produto,
            nome: produto.nome,
            descricao: produto.descricao,
            qtd: produto.qtd_estoque,
            cores: produto.cor_produto,
            tamanho: produto.tamanho_produto,
            valor: produto.valor,
        };
        dispatch(addFavoriteItem(item));
    }

    function handleCart() {
        const item = {
            id: produto.produto_id,
            imagens: produto.imagens_produto,
            nome: produto.nome,
            descricao: produto.descricao,
            Qtd: produto.qtd_estoque,
            cores: produto.cor_produto,
            tamanho: produto.tamanho_produto,
            valor: produto.valor,
        };
        dispatch(addCartItem(item));
    }

    return (
        <Card>
            <div className="imagem">
                <img
                    src={
                        produto.imagens_produto.length !== 0 ? (
                            produto.imagens_produto[0]?.url_imagem
                        ) : (
                            <GiClothes size={28} />
                        )
                    }
                />
                <AiOutlineHeart size={28} onClick={(e) => handleFavorite()} />
            </div>
            <div className="dadosProduto">
                <Link to={`/produto/${produto.produto_id}`}>
                    <h4>{produto.nome}</h4>
                    <h5>{`R$: ${produto.valor},00`}</h5>
                </Link>
                <button onClick={(e) => handleCart()}>
                    Adicionar ao carrinho
                </button>
            </div>
        </Card>
    );
}
