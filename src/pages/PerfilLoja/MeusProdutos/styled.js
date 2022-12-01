import styled from 'styled-components';

export const Produtos = styled.div`
    width: 80vw;
    height: 89vh;
    color: black;
    display: flex;
    flex-direction: column;
    background: #fff;

    title {
        display: flex;
        width: 80vw;
        height: 100px;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    }
    div {
        margin-top: 10px;
        h3 {
            margin-left: 20px;
            align-items: center;
        }
        button {
            margin-left: 20px;
        }
    }
`;
