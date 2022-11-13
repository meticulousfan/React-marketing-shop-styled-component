import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Produtos = styled.div`
    background: #fff;
    display: flex;
    width: 100%;
    color: ${colors.primaryDarkColor};

    .link-danger {
        cursor: pointer;
        position: absolute;
        top: 1;
        left: 40%;
    }

    .link-dark {
        top: 0;
        left: 5px;
    }

    .fotos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 45%;
        border-right: 1px rgb(0, 0, 0, 0.2) solid;

        svg {
            color: darkblue;
        }
    }

    .imagem {
        display: flex;
        background-color: ${colors.primaryLightColor};
        width: 50%;
        height: 50%;
    }
    .carousel {
        display: flex;
        width: 50%;
        margin-top: 10px;
        background-color: beige;
        justify-content: space-between;
    }
    .carousel svg {
        padding: 5px;
    }
`;

export const Info = styled.div`
    width: 55%;
    padding: 20px;

    .descricao{
        border-bottom: 1px rgb(0, 0, 0, 0.2) solid;
        padding-bottom: 20px;
    }

    .campo {
        border: 1px rgb(0, 0, 0, 0.2) solid;
        width: 80%;
        height: 150px;
        padding: 10px;
        background:#E9F0EB;
    }

    .tamanho {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items:center;
        padding: 15px;
        }
    .tamanho + .tamanho{
        border-bottom: 1px rgb(0, 0, 0, 0.2) solid;

    }
    .tamanho button{
        background: #f1f4f2;
        color: rgb(1, 1, 1, 0.8);
        border-radius:50%;
        margin-left: 5px ;
    }

    .resumo {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        align-items:center;
    }
    .resumo button {
        display: flex;
        align-items: center;
        justify-content:center;
        width: 50%;
        background: ${colors.successColor};
        transition: 300ms;

        svg{
            background: :white;
            margin-right:10px
        }
    }
    .resumo button:hover{
        background: rgb(59, 173, 100);

    }
`;
