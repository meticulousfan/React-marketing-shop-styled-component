import React from 'react';
import { GiClothes } from 'react-icons/gi';
import Carousel from 'react-bootstrap/Carousel';

function Carrossel(props) {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn-icons-png.flaticon.com/512/130/130302.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn-icons-png.flaticon.com/512/130/130302.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn-icons-png.flaticon.com/512/130/130302.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrossel;
