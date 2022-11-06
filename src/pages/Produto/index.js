import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { GiClothes } from 'react-icons/gi';

import { Produtos } from './styled';

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
                    <p>Nome</p>
                    <p>Valor</p>
                </div>
            </div>
            <div className="info">
                <div className="descricao">
                    <p>Descrição</p>
                </div>
                <div className="tamanho">
                    <h3>Tamanho:</h3>
                </div>
                <div className="botao">
                    <button>P</button>
                    <button>M</button>
                    <button>G</button>
                </div>
                <div className="total">
                    <h3>Total:</h3>
                </div>

                <div className="add">
                    <button>Adicionar ao carrinho</button>
                </div>
                <div className="vendido">
                    <p>Vendido por:</p>
                </div>
            </div>
        </Produtos>
    );
}
