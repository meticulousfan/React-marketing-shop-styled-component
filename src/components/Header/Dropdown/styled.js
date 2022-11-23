import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Div = styled.div`
    button {
        border: none;
        background: none;
        color: ${colors.primaryColor};
        width: 24px;
        height: 24px;
    }

    #menu {
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 8px 0px #ff897d;
        padding: 0;
        margin: 0;
        position: absolute;
        right: 20px;
        top: 70px;
        z-index: 1;

        div {
            padding-top: 10px;

            a {
                margin: 0;
            }
        }
    }

    h3 {
        text-align: center;
        padding: 10px 0px;
        color: ${colors.primaryDarkColor};
    }

    li + li {
        border-top: 1px solid ${colors.primaryLightColor};

        svg {
            margin: 0 8px 0 0;
        }

        a {
            display: flex;
            align-items: center;
            text-align: center;
            color: ${colors.primaryDarkColor};
        }
    }

    li {
        transition: 300ms;
        padding: 10px 10px 10px 20px;
    }

    li:hover {
        background-color: #faecf6;
    }

    #usuario {
        position: relative;
    }

    .user {
        margin: 10px 20px;
    }

    .on {
        position: absolute;
        top: 10px;
        right: 35px;
        z-index: 0;
        height: 15px;
        width: 15px;
        background: #1bfa01;
        border-radius: 50%;
    }
`;
