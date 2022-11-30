import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const ContainerCardBuy = styled.div`
    background: ${colors.primaryLightColor};
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    color: ${colors.primaryDarkColor};

    div {
        display: flex;
        flex-wrap: wrap;
    }
`;
