import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
    height: 11%;
    background: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    border-bottom: 1px solid #eee;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        color: ${colors.primaryColor};
        margin: 10px 20px;
        font-weight: bold;
        text-decoration: none;
    }

    img {
        width: 200px;
        height: 50px;
    }

    .favorite {
        position: relative;

        p {
            position: absolute;
            top: -16px;
            right: -4px;
        }
    }

    .cart {
        position: relative;

        p {
            position: absolute;
            top: -16px;
            right: -4px;
        }
    }
`;
