import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Dados } from './styled';

export default function DadosPerfil() {
    const usuario = useSelector((state) => state.auth.usuario);

    return (
        <Dados className="overflow-auto">
            <title>
                <h1>Bem-vindo {usuario.nome}</h1>
            </title>
            <div className="nome">
                <h5>
                    Nome: {usuario.nome} {usuario.sobrenome}
                </h5>
                <h5>CPF: {usuario.CPF ? usuario.CPF : 'XXX.XXX.XXX-XX'}</h5>
            </div>
            <div className="info">
                <h5>Informações de contato:</h5>
                {usuario.contatos.length > 0 ? (
                    usuario.contatos.map((contato, index) => {
                        <h1 key={index}>{contato}</h1>;
                    })
                ) : (
                    <button>Adicionar contato</button>
                )}
                <h5>Informações de endereço:</h5>
                {usuario.enderecos.length > 0 ? (
                    usuario.enderecos.map((endereco, index) => {
                        <h1 key={index}>{endereco}</h1>;
                    })
                ) : (
                    <button>Adicionar endereco</button>
                )}
            </div>
        </Dados>
    );
}
