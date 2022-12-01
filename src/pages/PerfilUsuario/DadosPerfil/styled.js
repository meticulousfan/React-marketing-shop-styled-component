import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Dados = styled.div`
    width: 80vw;
    height: 89vh;
    color: black;
    display: flex;
    flex-direction: column;
    background: #fff;

    title {
        display: flex;
        width: 80vw;
        height: 200px;
        justify-content: center;
        padding: 20px;
    }
    h5 {
            height:100px;
            border-top: 1px solid rgb(0, 0, 0, 0.1);
            align-items: space-around;
            padding: 10px 10px;
        }

    .nome {
        display: flex;
        flex-direction:column;


    }
    .info  {
        display: :flex;
        flex-direction:column;
        justify-content: space-around;
    }
`;
