import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const SideBar = styled.div`
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40%;
        h4 {
            display: flex;
            justify-content: center;
            align-items: center;
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
        svg {
            margin-left: 10px;
        }
    }

    ul:hover {
        color: black;
    }
`;
