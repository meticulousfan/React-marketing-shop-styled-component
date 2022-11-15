import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Dados = styled.div`
    width: 80vw;
    height: 89vh;
    color: #a6aaad;
    display: flex;
    flex-direction: column;

    .bemvindo {
        display: flex;
        width: 80vw;
        height: 200px;
        justify-content: center;
    }
    h5 {
            height:100px;
            border-top: 1px solid rgb(0, 0, 0, 0.2);
            align-items: space-around;
        }

    .nome {
        display: flex;
        flex-direction:column;


    }
    .info  {
        display: :flex;
        flex-direction:column;
        justify-content: space-around;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    }
`;
