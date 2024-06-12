import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import CadastrarButton from './components/Buttons/cadastrarTransacaoButton';
import { useRollups } from './useRollups';
import { ethers } from 'ethers';
import { Network } from "./Network";
import { GraphQLProvider } from "./GraphQL";
import { InputContainer, StyledInput, MainContainer, Titulos, RowContainer, Row, ButtonContainer } from '../src/RegistrarTransacao';

interface IInputPropos {
  dappAddress: string 
}

export const ValidateTransaction: React.FC<IInputPropos> = (props) => {
  const rollups = useRollups(props.dappAddress); // Substitua pelo endereço real do seu contrato DApp

  const [formData, setFormData] = useState({
    method: "validateTransaction",
    id: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let jsonData;

    if (formData.method === "validateTransaction") {
      jsonData = {
        method: "validateTransaction",
        data: formData.id
      };

      console.log(jsonData);
    }

    const jsonString = JSON.stringify(jsonData);
    addInput(jsonString);
  };

  const addInput = async (str: string) => {

    console.log("DENTRO DO ADD INPUT");

    if (rollups) {
      
      console.log("DENTRO DO IF ROLLUPS");

      try {
        let payload = ethers.utils.toUtf8Bytes(str);
        await rollups.inputContract.addInput(props.dappAddress, payload);
      } catch (e) {
        console.log(`${e}`);
      }
    }
  };

  const [input, setInput] = useState<string>("");
  
  const handleSendClick = () => {
    console.log("DENTRO DO BOTÃO DE ENVIAR O INPUT");
    addInput(input);
  };

  return (
    <>
    <div>
      <Header />
      <br />
      <Network />
      <GraphQLProvider>
        <form onSubmit={handleSubmit}>
          <MainContainer>
            <Titulos>
              <h1 id="titulo" >Realize a validação da transação</h1>
              <h5 id="descricao" >Preencha os campos abaixo para a validação</h5>
            </Titulos>
            <RowContainer>
            <Row>
            <InputContainer>
              <label htmlFor="id">ID da transação:</label>
              <StyledInput 
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
            </InputContainer>
            </Row>
            </RowContainer>
          </MainContainer>
          <ButtonContainer>
            <CadastrarButton type="submit">Validar</CadastrarButton>
          </ButtonContainer>
        </ form>
      </ GraphQLProvider>
    </div>
    
    </>
  );
};

export default ValidateTransaction;