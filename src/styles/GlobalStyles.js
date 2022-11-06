import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${colors.primaryLightColor};
        color: ${colors.primaryColor};
    }

    html, body, #root{
        height: 100%;
    }

    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        font-weight: 700;
        transition: all 200ms;
    }

    button:hover {
        filter: brightness(85%);
    }

    a {
        text-decoration: none;
        color: ${colors.primaryColor};
    }

    ul {
        list-style: none;
    }

    /* body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successColor};
    } */
`;

export const Container = styled.section`
    width: 100%;
    background: #fff;
    border-top: 1px solid #eee;
    padding: 30px;
`;
