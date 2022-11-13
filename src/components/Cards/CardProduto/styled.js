import styled from 'styled-components';

export const ContainerProduto = styled.div`
    width: 100%;
    display: flex;

    .info-produto {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #eee;
        height: fit-content;
    }

    .imagem {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;

        img {
            width: 80%;
            height: 80%;
            background: rgb(1, 3, 3, 0.2);
        }
    }
    .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px;
    }
`;
