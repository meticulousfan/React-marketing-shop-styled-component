import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Pagina = styled.div`
    width: 100%;
    height: 89%;
    background: white;
    color: ${colors.primaryDarkColor};
    header {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    }

    main {
        width: 100%;
        height: 40%;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);
        h5 {
            display: flex;
            justify-content: space-around;
        }
    }

    section {
        width: 100%;
        height: 40%;
        display: flex;
        div {
            width: 50%;
            border-right: 1px solid rgb(0, 0, 0, 0.4);
            h5 {
                display: flex;
                align-items: center;
            }
            svg {
                margin-right: 10px;
            }
        }
    }
`;
