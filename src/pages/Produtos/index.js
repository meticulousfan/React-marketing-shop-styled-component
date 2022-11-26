import React, { useEffect, useState } from 'react';

import CardPage from '../../components/Cards/CardPage';
import { Container } from '../../styles/GlobalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import { ProdutoContainer } from './styled';

export default function Produtos() {
    const [isLoading, setIsLoading] = useState(false);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            const res = await axios.get('/produtos');
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
