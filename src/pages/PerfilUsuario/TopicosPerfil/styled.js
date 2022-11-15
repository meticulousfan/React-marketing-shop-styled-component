import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const SideBar = styled.div`
    height: 89vh;
    div {
        width: 100%;
        padding: 40px;
        height: 40%;
        h4 {
            width: 100%;
            justify-content: space-around;
            margin: 20px;
        }
    }
    li {
        width: 100%;
        margin-top: 15px;
    }

    ul {
        color: ${colors.primaryLightColor};
        width: 100%;
        height: fit-content;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);
        transition: 300ms;
    }

    ul:hover {
        color: black;
    }
`;
