import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineAddShoppingCart, MdBackspace } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DropdownCor from './Dropdown';
import { Produtos } from './styled';
import { Info } from './styled';
import axios from '../../services/axios';
import {
    CartRequest,
    FavoriteRequest,
} from '../../store/modules/cache/actions';

export default function Produto() {
    const dispatch = useDispatch();

    const id = useParams('id');
    const [lojaId, setLojaId] = useState(0);
    const [loja, setLoja] = useState('');
    const [produto, setProduto] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const res = await axios.get(`produto/${id.id}`);
            setProduto(res.data);
            setLojaId(res.data.loja_id);
            setIsLoading(false);
        }

        async function getLoja() {
            setIsLoading(true);
            const res = await axios.get(`loja/${lojaId}`);
            setLoja(res.data.nome_fantasia);
            setIsLoading(false);
        }

        getData();
        getLoja();
    }, [id]);

    function handleFavorite() {
        dispatch(FavoriteRequest({ produto }));
    }

    function handleCart() {
        dispatch(CartRequest({ produto }));
    }

    return (
        <Produtos>
            <div className="fotos">
                <Link to="/" className="exit">
                    <MdBackspace size={40} className="exit" />
                </Link>
                <div className="imagem">
                    <GiClothes size={300} />
                </div>
                <div className="carousel">
                    <GiClothes size={60} />
                    <GiClothes size={60} />
                    <GiClothes size={60} />
                </div>

                <AiOutlineHeart
                    size={35}
                    className="link-danger"
                    onClick={handleFavorite}
                />
            </div>
            <Info>
                <div className="descricao">
                    <h2>{produto.nome}</h2>
                    <h5>{loja}</h5>
                    <h5>Descrição:</h5>
                    <div className="campo overflow-auto">
                        <p>{produto.descricao}</p>
                    </div>
                </div>

                <div>
                    <div className="tamanho">
                        <h5>Tamanho:</h5>
                        <button>P</button>
                        <button>M</button>
                        <button>G</button>
                    </div>
                    <div className="drop">
                        <h5>Cores:</h5>
                        <DropdownCor />
                    </div>
                </div>
                <div className="resumo">
                    <h2>Valor: {produto.valor}</h2>
                    <button onClick={handleCart}>
                        <MdOutlineAddShoppingCart size={30} />
                        Adicionar
                    </button>
                </div>
            </Info>
        </Produtos>
    );
}
