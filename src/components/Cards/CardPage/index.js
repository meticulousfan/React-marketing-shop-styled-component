import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { useDispatch } from 'react-redux';

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

    let nome = { nome: 'matheus' };

    function handleFavorite() {
        dispatch(actions.FavoriteRequest({ nome }));
        return alert('foi');
    }

    function handleCart() {
        dispatch(actions.CartRequest({ nome }));
        return alert('foi');
    }

    return (
        <Body className="col-12">
            <Loading isLoading={isLoading} />
            {produtos.map((produto) => {
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
                                onClick={handleFavorite}
                            />
                        </div>
                        <div className="dadosProduto">
                            <h4>{produto.nome}</h4>
                            <h5>{`R$: ${produto.valor}`}</h5>
                            <button onClick={handleCart}>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </Card>
                );
            })}
        </Body>
    );
}
