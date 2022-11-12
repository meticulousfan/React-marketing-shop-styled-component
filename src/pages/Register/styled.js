import styled from 'styled-components';
import * as colors from '../../config/colors';
import FundoArte from '../../assets/FundoArte.jpg';
import FundoAves from '../../assets/FundoAves.jpg';
import FundoBuque from '../../assets/FundoBuque.jpg';
import FundoColorido from '../../assets/FundoColorido.jpg';
import FundoFlores from '../../assets/FundoFlores.jpg';
import FundoFrutas from '../../assets/FundoFrutas.jpg';

export const Main = styled.main`
    width: 100%;
    height: 89%;
    display: flex;
    justify-content: center;
    background-image: url(${FundoBuque});
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 20px;

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    input {
        height: 40px;
        font-size: 18px;
        border: 1px solid #ddd;
        padding: 0 10px;
        border-radius: 3px;
        margin-top: 5px;

        &:focus {
            border: 1px solid ${colors.primaryColor};
        }
    }

    p {
        text-align: center;
        padding-top: 30px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;
