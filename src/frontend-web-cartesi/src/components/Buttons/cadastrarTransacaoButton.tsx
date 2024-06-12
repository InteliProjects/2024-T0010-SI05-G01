import React, { ReactNode } from "react";
import { CadastrarTransacaoButton } from "./style";

interface CadastrarButtonProps {
    onClick?: () => void;
    children: ReactNode;
    type?: "submit"
}

const TransacaoButton: React.FC<CadastrarButtonProps> = ({ children, onClick }) => {
    return (
        <CadastrarTransacaoButton onClick={onClick}>
            {children}
        </CadastrarTransacaoButton>
    );
}


export default TransacaoButton;
