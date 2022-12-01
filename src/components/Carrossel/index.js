import React from 'react';
import { GiClothes } from 'react-icons/gi';
import Carousel from 'react-bootstrap/Carousel';

function Carrossel(props) {
    const imagens = props.imagem;

    return (
        <Carousel fade>
            {imagens.map((imagem, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={imagem.url_imagem}
                            alt={imagem.descricao_imagem}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default Carrossel;
