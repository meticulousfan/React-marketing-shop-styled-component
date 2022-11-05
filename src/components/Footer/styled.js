import styled from 'styled-components';
import * as colors from '../../config/colors';

export const FooterContainer = styled.footer`
    background: ${colors.primaryDarkColor};
    height: 150px;
    width: 100%;
    display: flex;

    .news {
        display: flex;
        width: 40%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        p {
            color: white;
            font-size: 20px;
            font-family: sans-serif;
            padding-bottom: 5px;
            padding-top: 4px;
        }
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        button {
            background-color: ${colors.successColor};
        }

        input {
            width: 50%;
            height: 35px;
        }
    }

    .icones {
        display: flex;
        width: 30%;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-evenly;
        svg {
            color: white;
        }
    }
    .contato {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            color: #f0e8eb;
            font-size: 20px;
        }
        .powered p {
            padding-top: 30px;
            font-size: 15px;
        }
    }
`;
