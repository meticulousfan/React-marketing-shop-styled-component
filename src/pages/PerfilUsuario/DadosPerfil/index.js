import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Dados } from './styled';

export default function DadosPerfil() {
    const usuario = useSelector((state) => state.auth.usuario);

    const [Adresses, setAdreses] = useState([]);

    return (
        <Dados className="overflow-auto">
            <title>
                <h1>Bem-vindo {usuario.nome}</h1>
            </title>
            <div className="nome">
                <h5>
                    Nome: {usuario.nome} {usuario.sobrenome}
                </h5>
            </div>
            <div className="info">
                <h5>
                    Informações de contato:
                    {usuario.contato_usuario_id ? (
                        <p>{usuario.contato_usuario_id}</p>
                    ) : (
                        <button className="info">
                            adicionar informações de contato
                        </button>
                    )}
                </h5>
                <h5>Informações de endereço:</h5>
            </div>
        </Dados>
    );
}
