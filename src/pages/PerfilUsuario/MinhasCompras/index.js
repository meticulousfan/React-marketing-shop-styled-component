import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Compras, ContainerCardBuy } from './styled';
import Loading from '../../../components/Loading';
import CardBuy from '../../../components/Cards/CardBuy';

export default function MinhasCompras() {
    const usuario = useSelector((state) => state.auth.usuario);
    const isLoading = useSelector((state) => state.auth.isLoading);

    return (
        <Compras className="overflow-auto">
            <Loading isLoading={isLoading} />
            <title>
                <h1>Minhas Compras</h1>
            </title>
            <section>
                {usuario.compras.length > 0 ? (
                    usuario.compras.map((venda, index) => {
                        return (
                            <CardBuy
                                key={index}
                                id={usuario.usuario_id}
                                venda={venda}
                            />
                        );
                    })
                ) : (
                    <div>
                        <h1>Você ainda não comprou nada! :'( </h1>
                        <Link to={'/'}>
                            <button className="btn btn-primary">
                                Ir as compras
                            </button>
                        </Link>
                    </div>
                )}
            </section>
        </Compras>
    );
}
