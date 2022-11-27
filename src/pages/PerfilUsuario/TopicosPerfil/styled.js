import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const SideBar = styled.div`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 40px;
        height: 40%;
        h4 {
            display: flex;
            width: 100%;
            justify-content: center;
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
