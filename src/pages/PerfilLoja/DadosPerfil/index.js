import React from 'react';
import { useSelector } from 'react-redux';

import { Dados } from './styled';

export default function DadosPerfilLoja() {
    const loja = useSelector((state) => state.authLoja.loja);

    console.log(loja);
    return (
        <Dados className="overflow-auto">
            <title>
                <h1>Bem-vindo {loja.nome_fantasia}</h1>
            </title>
            <div className="nome">
                <h5>{loja.nome_fantasia}</h5>
            </div>
            <div className="info">
                <h5>Informações de contato:</h5>
                <h5>Informações de endereço:</h5>
            </div>
        </Dados>
    );
}
