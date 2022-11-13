import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

import { Produtos } from './styled';
import { Info } from './styled';

export default function Produto() {
    return (
        <Produtos>
            <div className="fotos">
                <div className="imagem">
                    <GiClothes size={300} />
                </div>
                <div className="footer">
                    <div className="carousel">
                        <GiClothes size={60} />
                        <GiClothes size={60} />
                        <GiClothes size={60} />
                    </div>
                </div>
            </div>
            <Info>
                <div className="descricao">
                    <h2>Nome</h2>
                    <h5>Vendido por:</h5>
                    <h5>Descrição:</h5>
                    <div className="campo"></div>
                </div>

                <div>
                    <div className="tamanho">
                        <h5>Tamanho:</h5>

                        <button>P</button>
                        <button>M</button>
                        <button>G</button>
                    </div>
                    <div className="tamanho">
                        <h5>Cores:</h5>

                        <button>amarelo</button>
                        <button>azul</button>
                        <button>vermelho</button>
                    </div>
                </div>
                <div className="resumo">
                    <h2>Valor:</h2>
                    <button>
                        <MdOutlineAddShoppingCart size={30} />
                        Adicionar
                    </button>
                </div>
            </Info>
        </Produtos>
    );
}
