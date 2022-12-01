import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardPage from '../../components/Cards/CardPage';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { ProdutoContainer } from '../Produtos/styled';
import axios from '../../services/axios';

export default function Feminina() {
    const [isLoading, setIsLoading] = useState(false);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            const res = await axios.get('/produto-filtro/2');
            setProdutos(res.data);
            setIsLoading(false);
        }

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <ProdutoContainer>
                <Loading isLoading={isLoading} />
                {produtos.map((item, index) => {
                    return <CardPage key={index} item={item} />;
                })}
            </ProdutoContainer>
        </Container>
    );
}
