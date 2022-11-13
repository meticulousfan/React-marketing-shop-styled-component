import styled from 'styled-components';
import * as color from '../../config/colors';

export const Produtos = styled.div`
    padding-left: 10%;
    display: flex;
    width: 100vw;
    color: ${color.primaryDarkColor};
    height: 100vh;

    .fotos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50vw;
        height: 100vh;
        border-right: 1px rgb(0, 0, 0, 0.2) solid;
    }
    svg {
        color: darkblue;
    }
    .imagem {
        display: flex;
        background-color: beige;
        width: 50%;
        height: 50%;
    }
    .carousel {
        display: flex;
        flex-direction: row;
        width: 50%;
        margin-top: 10px;
        background-color: beige;
        justify-content: space-between;
    }
    .carousel svg {
        margin: 5px;
    }
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .footer p {
        margin: 5px;
    }
    .info {
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .descricao {
        width: 50vw;
        height: 30vh;
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    .tamanho {
        width: 50vw;
        height: fit-content;
        display: flex;
        justify-content: center;
    }
    .botao {
        display: flex;
        width: 20vw;
        height: fit-content;
        justify-content: center;
        justify-content: space-between;
        margin: 20px;
    }
    .botao button {
        background-color: #faf6f7;
        color: ${color.primaryDarkColor};
    }
    .total {
        display: flex;
        width: 50vw;
        height: fit-content;
        justify-content: flex-start;
    }
    .add button {
        background-color: ${color.successColor};
        width: fit-content;
        align-items: flex-end;
    }
    .vendido {
        width: 50vw;
        display: flex;
        align-items: flex-end;
    }
`;
