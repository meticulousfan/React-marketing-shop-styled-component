import React from 'react';
import { Dados } from './styled';

export default function DadosPerfil() {
    return (
        <Dados className="overflow-auto">
            <title>
                <h1>Bem-vindo (a)</h1>
            </title>
            <div className="nome">
                <h5>Nome:</h5>
                <h5>Sobrenome:</h5>
            </div>
            <div className="info">
                <h5>Informações de contato:</h5>
                <h5>Informações de endereço:</h5>
            </div>
        </Dados>
    );
}
