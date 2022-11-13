import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SubContainer = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eee;

    .produto {
        width: 90%;
        padding: 20px;
    }
`;

export const Subtotal = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    button {
        width: 100%;
        height: 50%;
        color: white;

        svg {
            margin: 10px;
        }
    }

    .excluir {
        background: rgb(195, 7, 63, 0.5);
        transition: 300ms;
    }

    .excluir:hover {
        background: ${colors.primaryColor};
    }

    .adicionar {
        background: rgb(49, 173, 85, 0.5);
        transition: 300ms;
    }
    .adicionar:hover {
        background: ${colors.successColor};
    }
`;
