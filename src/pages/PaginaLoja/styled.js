import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Pagina = styled.div`
    width: 100%;
    background: white;
    color: ${colors.primaryDarkColor};

    header {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 15px;
        }
    }

    article {
        width: 100%;
        div {
            width: 100%;
            height: 200px;
            border-top: 1px solid rgb(0, 0, 0, 0.4);
            padding: 10px;
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

export const SectionProducts = styled.section`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
`;
