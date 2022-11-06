import React from 'react';

import CardPage from '../../components/Cards/CardPage';
import { Container } from '../../styles/GlobalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Produtos() {
    return (
        <Container>
            <CardPage route={'/produtos'} />
        </Container>
    );
}
