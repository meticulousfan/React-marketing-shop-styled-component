import React from 'react';
import { MdBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Compra, Produtos } from './styled';
import { Info } from './styled';
import CardProduto from '../../components/Cards/CardProduto';
import {
    calculateTotalSelector,
    itemsCartSelector,
} from '../../store/modules/cache/cart';
import axios from '../../services/axios';

export default function Compras() {
    const dispatch = useDispatch();

    const items = useSelector(itemsCartSelector);
    const total = useSelector(calculateTotalSelector);

    async function handleSubmit() {
        const res = await axios.post('/venda/cadastro', {
            usuario_id: 1,
        });

        // for (i = 0; items.length; i++) {
        //     axios.post('venda-produto/cadastro', {
        //         produto_id: items.id,
        //         venda_id: res.data.venda_id,
        //     });
        // }
        console.log(res.data);
    }

    return (
        <>
            <Compra>
                <Produtos className="cardCompra overflow-auto">
                    <Link to="/">
                        <MdBackspace size={30} className="link-dark" />
                    </Link>
                    {items.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <CardProduto item={item} />
                                </div>
                                <span>{item.qtd}</span>
                            </div>
                        );
                    })}
                </Produtos>
                <Info>
                    <div className="descricao">
                        <h4>Total items:</h4>
                        <h5>Endereço: "Avenida"</h5>
                        <h5>Frete:</h5>
                        <div>
                            <div className="frete"></div>
                            <div className="frete"></div>
                        </div>
                        <h5>Forma de pagamento:</h5>
                        <div>
                            <div className="frete"></div>
                            <div className="frete"></div>
                        </div>
                    </div>
                    <div className="resumo">
                        <h2>Total: R$ {total}</h2>
                        <button onClick={handleSubmit}>Comprar</button>
                    </div>
                </Info>
            </Compra>
        </>
    );
}
