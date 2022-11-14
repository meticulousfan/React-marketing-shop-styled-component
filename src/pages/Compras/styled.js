import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Compra = styled.div`
    background: #fff;
    display: flex;
    width: 100%;
    height: 89%;
`;

export const Produtos = styled.section`
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 70%;
    border-right: 1px rgb(0, 0, 0, 0.2) solid;
`;

export const Info = styled.div`
    width: 30%;
    padding: 20px;

    .descricao{
        border-bottom: 1px rgb(0, 0, 0, 0.2) solid;
        padding-bottom: 20px;

        div {
            display: flex;
            justify-content: space-around;
            width: 80%;

            .frete {
                height: 80px;
                width: 45%;
                border: 1px rgb(0, 0, 0, 0.2) solid;
                border-radius: 3px;
                background: ${colors.primaryLightColor};
            }
            .frete:hover{
                background: rgb(0, 0, 0, 0.1);
            }
        }
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
