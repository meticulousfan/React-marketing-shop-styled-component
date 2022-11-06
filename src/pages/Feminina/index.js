import React from 'react';

import CardPage from '../../components/Cards/CardPage';
import { Container } from '../../styles/GlobalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feminina() {
    return (
        <Container>
            <CardPage route={'/produto-filtro/2'} />
        </Container>
    );
}
