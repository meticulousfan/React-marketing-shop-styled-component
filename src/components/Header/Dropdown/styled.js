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

    ul {
        width: max-content;
        height: max-content;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 8px 0px #ff897d;

        div {
            padding-top: 10px;
        }
    }

    h3 {
        text-align: center;
        padding: 10px 0px;
        color: ${colors.primaryDarkColor};
    }

    li + li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid ${colors.primaryLightColor};
        padding: 10px 20px 10px 12px;

        svg {
            margin: 0 12px;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            color: ${colors.primaryDarkColor};
        }
    }

    li {
        transition: 300ms;
    }

    li:hover {
        background-color: #faecf6;
    }

    #usuario {
        position: relative;
    }

    #menu {
        position: absolute;
        right: 20px;
        top: 70px;
    }
`;
