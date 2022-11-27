import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Dados } from './styled';
import axios from '../../../services/axios';

export default function DadosPerfil() {
    const usuario = useSelector((state) => state.auth.usuario);

    const [Adresses, setAdreses] = useState([]);

    useEffect(() => {
        async function getAddress() {
            const res = await axios.get(`/usuario-endereco/${usuario.id}`);
            setAdreses(res);
            console.log(res.data);
        }

        getAddress();
    }, [usuario.id]);

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
                <h5>Informações de contato:</h5>
                <h5>Informações de endereço:</h5>
            </div>
        </Dados>
    );
}
