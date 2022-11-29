import React from 'react';
import { useSelector } from 'react-redux';

import CardProduto from '../../../components/Cards/CardProduto';
import { Produtos } from './styled';

export default function MeusProdutos() {
    const loja = useSelector((state) => state.authLoja.loja);

    function handleFormat(produto) {
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
        return item;
    }

    return (
        <Produtos className="overflow-auto">
            <title>
                <h1>Meus Produtos</h1>
            </title>
            <div className="d-flex">
                <button className="bg-success">+</button>
                <h3>Adicionar novo produto</h3>
            </div>
            <div>
                {loja.produtos.map((produto, index) => {
                    const item = handleFormat(produto);
                    return <CardProduto key={index} item={item} />;
                })}
            </div>
        </Produtos>
    );
}
