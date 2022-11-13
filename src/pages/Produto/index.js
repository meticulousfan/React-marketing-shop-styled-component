import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import DropdownCor from './Dropdown';
import { Produtos } from './styled';
import { Info } from './styled';

export default function Produto() {
    return (
        <Produtos>
            <Link to="/">
                <TbArrowBackUp size={30} className="link-dark" />
            </Link>
            <AiOutlineHeart size={24} className="link-danger" />
            <div className="fotos">
                <div className="imagem">
                    <GiClothes size={300} />
                </div>
                <div className="carousel">
                    <GiClothes size={60} />
                    <GiClothes size={60} />
                    <GiClothes size={60} />
                </div>
            </div>
            <Info>
                <div className="descricao">
                    <h2>Nome</h2>
                    <h5>Vendido por:</h5>
                    <h5>Descrição:</h5>
                    <div className="campo overflow-auto">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
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
                        <DropdownCor />
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
