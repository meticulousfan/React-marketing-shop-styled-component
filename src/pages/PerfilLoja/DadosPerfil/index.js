import React from 'react';
import { useSelector } from 'react-redux';

import { Dados } from './styled';

export default function DadosPerfilLoja() {
    const loja = useSelector((state) => state.authLoja.loja);

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
                {loja.contatos.length > 0 ? (
                    loja.contatos.map((contato, index) => {
                        <h1 key={index}>{contato}</h1>;
                    })
                ) : (
                    <ModalContact
                        id={loja.loja_id}
                        route={'/loja-contato/cadastro'}
                    />
                )}
                <h5>Informações de endereço:</h5>
                {loja.enderecos.length > 0 ? (
                    loja.enderecos.map((endereco, index) => {
                        <h1 key={index}>{endereco}</h1>;
                    })
                ) : (
                    <ModalAddress
                        id={loja.loja_id}
                        route={'/usuario-endereco/cadastro'}
                    />
                )}
            </div>
        </Dados>
    );
}
