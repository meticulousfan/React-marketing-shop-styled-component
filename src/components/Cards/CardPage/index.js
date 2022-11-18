import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from '../../../services/axios';
import { Card, Body } from './styled';
import Loading from '../../Loading';
import * as actions from '../../../store/modules/cache/actions';

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
        const produtoFavorito = [...produtos];
        const prod = produtoFavorito[index];
        dispatch(actions.FavoriteRequest({ prod }));
    }

    function handleCart(index) {
        const produtoCarrinho = [...produtos];
        const prod = produtoCarrinho[index];
        dispatch(actions.CartRequest({ prod }));
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
