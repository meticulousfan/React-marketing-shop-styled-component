import React, { useEffect, useState } from 'react';

import axios from '../../../services/axios';
import CardBuyItems from '../CardBuyItems';
import { ContainerCardBuy } from './styled';

export default function CardBuy(props) {
    const [usuario, setUsuario] = useState({});

    const id = props.id;
    const venda = props.venda;

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`/usuario/${id}`);
            setUsuario(response.data);
        }

        getData();
    }, [id]);

    return (
        <ContainerCardBuy>
            <h4 className="text-center">Compra realizada: {venda.data}</h4>
            <div>
                {venda.produtos.map((produto, index) => {
                    return <CardBuyItems key={index} produto={produto} />;
                })}
            </div>
            <h2 className="text-end pe-5">Total: R$: {venda.total}</h2>
        </ContainerCardBuy>
    );
}
