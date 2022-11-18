import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Body = styled.div`
    display: flex;
    min-height: 80vh;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
`;

export const Card = styled.div`
    height: 400px;
    width: 21%;
    color: black;
    background: white;
    box-shadow: 0 0 1px 0 ${colors.primaryDarkColor};
    padding: 10px;
    margin-bottom: 20px;
    position: relative;

    div img {
        width: 100%;
        height: 100%;
        padding-top: 20px;
    }

    .imagem {
        height: 60%;
        padding: 5px;

        svg {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            color: ${colors.primaryColor};
        }
    }

    .dadosProduto {
        display: flex;
        height: 40%;
        flex-direction: column;
        align-items: center;

        h4 {
            padding-top: 20px;
        }

        button {
            width: 90%;
            height: auto;
        }
    }
`;
