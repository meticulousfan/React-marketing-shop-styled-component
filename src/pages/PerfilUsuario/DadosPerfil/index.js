import React, { useEffect, useState } from 'react';

import { Dados } from './styled';
import axios from '../../../services/axios';

export default function DadosPerfil() {
    const [nome, setNome] = useState([]);
    const [sobrenome, setSobrenome] = useState([]);

    const DadosUsuario = async () => {
        try {
            const url = `/usuario/${localStorage.getItem('usuario_id')}`;
            const res = await axios.get(url);
            console.log();
        } catch (err) {
            console.log(err);
        }
    };
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
