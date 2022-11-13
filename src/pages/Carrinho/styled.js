import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SubContainer = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eee;

    .produto {
        width: 90%;
        padding: 20px;
    }
`;

export const Subtotal = styled.div`
    width: 30%;
    padding: 15px;
    position: relative;

    svg {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    h4 {
        text-align: end;
    }

    h5 {
        text-align: start;
        padding: 10px;

        input {
            height: 30px;
            border: 1px solid rgb(1, 3, 3, 0.1);
            width: 40px;
            padding-left: 5px;
            margin-left: 20px;
        }
    }

    h4 input {
        width: 10%;
        border: none;
        height: 30px;
        padding-left: 10px;
    }
`;

export const Compras = styled.div`
    display: flex;
    div {
        display: flex;
        width: 70%;
        padding-top: 20px;
        justify-content: center;
    }
    input {
        border: none;
        width: 150px;
    }
    button {
        width: 200px;
        margin-top: 20px;
        background: ${colors.successColor};
        border: none;
        border-radius: 4px;
    }
    .total {
        width: 30%;
        justify-content: flex-end;
    }
`;
