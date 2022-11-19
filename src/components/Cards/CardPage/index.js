import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from '../../../services/axios';
import { Card, Body } from './styled';
import Loading from '../../Loading';
import { addCartItem, addItem } from '../../../store/modules/cache/cart';
import { addFavoriteItem } from '../../../store/modules/cache/favorite';

export default function CardPage(props) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            const res = await axios.get(props.route);
            setProdutos(res.data);
            setIsLoading(false);
        }

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleFavorite(index) {
        const prod = produtos[index];
        const item = {
            id: prod.produto_id,
            imagens: prod.imagens_produto,
            nome: prod.nome,
            descricao: prod.descricao,
            qtd: prod.qtd_estoque,
            cores: prod.cor_produto,
            tamanho: prod.tamanho_produto,
            valor: prod.valor,
        };
        dispatch(addFavoriteItem(item));
    }

    function handleCart(index) {
        const prod = produtos[index];
        const item = {
            id: prod.produto_id,
            imagens: prod.imagens_produto,
            nome: prod.nome,
            descricao: prod.descricao,
            qtd: prod.qtd_estoque,
            cores: prod.cor_produto,
            tamanho: prod.tamanho_produto,
            valor: prod.valor,
        };
        dispatch(addCartItem(item));
    }

    return (
        <Body className="col-12">
            <Loading isLoading={isLoading} />
            {produtos.map((produto, index) => {
                return (
                    <Card key={String(produto.produto_id)}>
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
                            <AiOutlineHeart
                                size={28}
                                onClick={(e) => handleFavorite(index)}
                            />
                        </div>
                        <div className="dadosProduto">
                            <Link to={`produto/${produto.produto_id}`}>
                                <h4>{produto.nome}</h4>
                                <h5>{`R$: ${produto.valor}`}</h5>
                            </Link>
                            <button onClick={(e) => handleCart(index)}>
                                Adicionar ao carrinho
                            </button>
                        </div>
                        ;
                    </Card>
                );
            })}
        </Body>
    );
}
