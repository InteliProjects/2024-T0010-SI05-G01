import styled from "styled-components";

export const CancelButton = styled.button`
    border: 1px solid #FF6A6A;
    border-radius: 8px;
    background-color: white;
    color: #FF6A6A;
    width: 80px;
    height: 40px;
    transition: all 400ms ease;
    cursor: pointer;

    &:hover {
        background-color: #FF6A6A;
        color: #FEFEFE;
        border-color: #7DEFFF;
    }
`;

export const CadastrarButton = styled.button`
    border: 1px solid #7DEFFF;
    border-radius: 8px;
    background-color: #7DEFFF;
    color: #1E2225;
    width: 80px;
    height: 40px;
    transition: all 400ms ease;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;

export const CadastrarTransacaoButton = styled.button`
    border: 1px solid #7DEFFF;
    border-radius: 0.55rem;
    background-color: #7DEFFF;
    color: #1E2225;
    width: 14rem;
    height: 2.8125rem;
    transition: all 400ms ease;
    cursor: pointer;
    margin-top: 0.125rem;
    margin: 2.125rem;
    font-family: 'Poppins', Arial;
    font-size: 1.125rem;
    font-weight: 500;

    &:hover {
        color: white;
        background-color: #00616E;
        border-color: #00616E;
        transform: scale(1.05);
    }
`;