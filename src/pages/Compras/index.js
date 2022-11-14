import React from 'react';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { Compra, Produtos } from './styled';
import { Info } from './styled';
import CardProduto from '../../components/Cards/CardProduto';

export default function Compras() {
    return (
        <>
            <Compra>
                <Produtos className="cardCompra overflow-auto">
                    <Link to="/">
                        <TbArrowBackUp size={30} className="link-dark" />
                    </Link>
                    <CardProduto />
                </Produtos>
                <Info>
                    <div className="descricao">
                        <h4>Total items: R$ </h4>
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
                        <h2>Total:</h2>
                        <button>Comprar</button>
                    </div>
                </Info>
            </Compra>
        </>
    );
}
