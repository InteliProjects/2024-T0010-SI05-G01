import styled from "styled-components";

export const HeaderStyle = styled.header`
    margin-top: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img {
        width: 36px;
        padding-left: 12px;
    }

    #bars {
        display: flex;
        height: 36px;
        width: 55px;
        align-items: flex-end;
        padding-right: 10px;
    }

    #user {
        display: flex;
        height: 36px;
        align-items: flex-end;
        padding-right: 12px;
    }

    #groupRight {
        display: flex;
        justify-content: end;
    }

    #menu {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 0.125rem;
        padding: 0;
        margin: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    #menu button {
        display: block;
        width: 100%;
        padding: 0.75rem;
        border: none;
        background-color: #1E2225;
        color: #FFFFFF;
        text-align: start;
        cursor: pointer;
        transition: background-color 0.4s ease;
        font-family: 'Poppins', Arial;
        font-size: 1.125rem;
        text-decoration: none; /* Removido para evitar sublinhado */
    }

    #menu button:hover {
        background-color: #4C555C;
    }

    #menu .logoutBtn {
        background-color: #1E2225;
        color: #FF6A6A;
    }

    #menu .logoutBtn:hover {
        background-color: #FF6A6A;
        color: #FFFFFF;
    }

    #menu .link1,
    #menu .link2,
    #menu .link3 {
        color: #FFFFFF;
        text-decoration: none;
    }
`;
