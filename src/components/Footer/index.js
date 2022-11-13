import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

import { FooterContainer } from './styled';

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <div className="contato">
                    <p>
                        <strong>Fale conosco</strong>
                    </p>
                    <p>(xx) xxxx-xxxx</p>
                    <div className="powered">
                        <p>&copy; Powered by:OnlineShop</p>
                    </div>
                </div>
                <div className="news">
                    <p>Assine nossa Newsletter:</p>
                    <div className="content">
                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                        ></input>
                        <button>Enviar</button>
                    </div>
                </div>
                <div className="icones">
                    <FaFacebook size={30} />
                    <FiTwitter size={30} />
                    <FaInstagram size={30} />
                </div>
            </FooterContainer>
        </>
    );
}
