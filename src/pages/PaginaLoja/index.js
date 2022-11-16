import React from 'react';
import { MdStoreMallDirectory, MdStarBorder } from 'react-icons/md';
import { TfiComments } from 'react-icons/tfi';

import { Pagina } from './styled';

export default function PaginaLoja() {
    return (
        <Pagina>
            <header>
                <MdStoreMallDirectory size={100} />
                <h5>Nome fantasia</h5>
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
