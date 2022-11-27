import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CardProduto from '../../../components/Cards/CardProduto';
import axios from '../../../services/axios';
import { Compras } from './styled';

export default function MinhasCompras() {
    const usuario = useSelector((state) => state.auth.usuario);

    const [item, setItem] = useState({});

    async function getProduct(id) {
        const produto = await (await axios.get(`/produto/${id}`)).data;
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
        setItem(item);
    }

    return (
        <Compras className="overflow-auto">
            <title>
                <h1>Minhas Compras</h1>
            </title>
            <div>
                {usuario.compras.length > 0 ? (
                    usuario.compras.map((vendas, index) => {
                        return (
                            <div
                                key={index}
                                className="h-25 bg-light d-flex justify-content-between"
                            >
                                {vendas.produtos.map((produto, index) => {
                                    getProduct(produto.produto_id);
                                    return (
                                        <CardProduto key={index} item={item} />
                                    );
                                })}
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <h1>Você ainda não comprou nada! :'( </h1>
                        <Link to={'/'}>
                            <button className="btn btn-primary">
                                Ir as compras
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </Compras>
    );
}
