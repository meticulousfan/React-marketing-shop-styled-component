import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Painel = styled.div`
    display: flex;
    width: 20%;
    height: 89%;
    color: ${colors.primaryLightColor};
    background: rgb(0, 0, 0, 0.5);
    list-style: none;
    div {
        flex-direction: column;
        padding: 60px;
        height: 40%;
        h4 {
            width: 100%;
            justify-content: space-around;
            margin-left: 15px;
        }
    }
    ul {
        width: 100%;
    }
`;
