import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineAddShoppingCart, MdBackspace } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DropdownCor from '../../components/Dropdown/index';
import { Produtos } from './styled';
import { Info } from './styled';
import axios from '../../services/axios';
import Carrossel from '../../components/Carrossel/index';
import { addCartItem } from '../../store/modules/cache/cart/index';
import { addFavoriteItem } from '../../store/modules/cache/favorite/index';

export default function Produto() {
    const dispatch = useDispatch();

    const id = useParams('id');
    const [lojaId, setLojaId] = useState(0);
    const [loja, setLoja] = useState('');
    const [produto, setProduto] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // const [cores, setCores] = useState();
    const [colors, setColors] = useState([]);
    const [imagem, setImagem] = useState([]);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const res = await axios.get(`produto/${id.id}`);
            setProduto(res.data);
            setLojaId(res.data.loja_id);
            setColors(res.data.cor_produto.split(' '));
            setIsLoading(false);
            setImagem(res.data.imagens_produto);
        }

        async function getLoja() {
            setIsLoading(true);
            const res = await axios.get(`loja/${lojaId}`);
            setLoja(res.data.nome_fantasia);
            setIsLoading(false);
        }

        getData();
        getLoja();
    }, [id, lojaId]);

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
        <Produtos>
            <div className="fotos">
                <Link to="/" className="exit">
                    <MdBackspace size={40} className="exit" />
                </Link>
                <Carrossel imagem={imagem} />

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
                        <button value={'P'}>P</button>
                        <button value={'M'}>M</button>
                        <button value={'G'}>G</button>
                    </div>
                    <div className="drop">
                        <h5>Cores:</h5>
                        <DropdownCor params={colors} value={''} />
                    </div>
                </div>
                <div className="resumo">
                    <h2>Valor: R$ {produto.valor} </h2>
                    <button onClick={handleCart}>
                        <MdOutlineAddShoppingCart size={30} />
                        Adicionar
                    </button>
                </div>
            </Info>
        </Produtos>
    );
}
