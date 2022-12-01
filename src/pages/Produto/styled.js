import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Produtos = styled.div`
    background: #fff;
    display: flex;
    height: 89%;
    width: 100%;
    color: ${colors.primaryDarkColor};

    .fotos {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 45%;
        border-right: 1px rgb(0, 0, 0, 0.2) solid;

        .link-danger {
            cursor: pointer;
            position: absolute;
            top: 30px;
            right: 30px;
        }

        .exit {
            position: absolute;
            cursor: pointer;
            color: ${colors.primaryDarkColor};
            top: 10px;
            left: 20px;
        }

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

    img {
        width: 35px;
        heigth: 35px;
        border-radius: 50%;
        margin: 10px;
    }

    .descricao{
        padding-bottom: 10px;

        h5 {
            padding: 10px 0 10px 0;
        }
    }

    .campo {
        border: 1px rgb(0, 0, 0, 0.2) solid;
        border-radius: 0 5px;
        width: 80%;
        height: 150px;
        padding: 10px 20px;
        background: #FAFDFF;
    }

    .tamanho + .tamanho{
        border-bottom: 1px rgb(0, 0, 0, 0.2) solid;

    }
    .tamanho button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 30px;
        height: 30px;
        background: #f1f4f2;
        color: rgb(1, 1, 1, 0.8);
        border-radius:50%;
        margin-left: 10px ;
    }
    .tamanho {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items:center;
        padding: 15px 0 15px 0;

    }

    .drop {
        display: flex;
        border-radius: 5px;
        padding-bottom: 15px;

        .btn-group {
            margin-left: 10px;
            height: 30px;
            .btn-drop{
                width: 150px;
            }
        }
    }

    .resumo {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        align-items:center;
        border-top: 1px rgb(0, 0, 0, 0.2) solid;
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
