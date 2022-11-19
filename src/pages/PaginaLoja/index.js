import React, { useEffect, useState } from 'react';
import { MdStoreMallDirectory, MdStarBorder } from 'react-icons/md';
import { TfiComments } from 'react-icons/tfi';

import { Pagina } from './styled';
import axios from '../../services/axios';

export default function PaginaLoja() {
    const [dadosLoja, setDadosLoja] = useState([]);

    const DadosLoja = async () => {
        try {
            const url = `/loja/${localStorage.getItem('loja_id')}`;
            const res = await axios.get(url);
            setDadosLoja(res.data);
            console.log(dadosLoja.produtos);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        DadosLoja();
    }, []);
    return (
        <Pagina>
            <header>
                {dadosLoja.url_imagem ? (
                    <img
                        src={dadosLoja.url_imagem}
                        alt="foto de perfil da loja"
                    />
                ) : (
                    <MdStoreMallDirectory size={100} />
                )}

                <h5>{dadosLoja.nome_fantasia}</h5>
            </header>
            <main>
                <h5>Produtos vendidos pela loja:</h5>
            </main>
            <section>
                <div className="overflow-auto">
                    <h5>
                        <MdStarBorder /> Avaliações
                    </h5>
                </div>
                <div className="overflow-auto">
                    <h5>
                        <TfiComments />
                        Comentários
                    </h5>
                </div>
            </section>
        </Pagina>
    );
}
