import React, { useEffect, useState } from 'react';
import { MdStoreMallDirectory, MdStarBorder } from 'react-icons/md';
import { TfiComments } from 'react-icons/tfi';
import { useParams } from 'react-router-dom';

import { Pagina, SectionProducts } from './styled';
import axios from '../../services/axios';
import CardPage from '../../components/Cards/CardPage';

export default function PaginaLoja() {
    const id = useParams('id');
    const [loja, setloja] = useState({});
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function dadosLoja() {
            const res = await axios.get(`/loja/${id.id}`);
            setloja(res.data);
            setProdutos(res.data.produtos);
        }
        dadosLoja();
    }, [id]);
    return (
        <Pagina>
            <header>
                {loja.img_perfil_loja ? (
                    <img
                        src={loja.img_perfil_loja}
                        alt="foto de perfil da loja"
                    />
                ) : (
                    <MdStoreMallDirectory size={100} />
                )}

                <h5>{loja.nome_fantasia}</h5>
            </header>
            <h5 className="text-center">Produtos vendidos pela loja:</h5>
            <SectionProducts>
                {produtos.map((item, index) => {
                    return <CardPage key={index} item={item} />;
                })}
            </SectionProducts>
            <article>
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
            </article>
        </Pagina>
    );
}
