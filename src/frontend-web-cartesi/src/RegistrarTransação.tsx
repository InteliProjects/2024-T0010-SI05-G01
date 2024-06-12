import React, { useState } from 'react';
import { useRollups } from './useRollups';
import { ethers } from 'ethers';
import Header from "./components/Header/Header";
import { useWallets } from "@web3-onboard/react";
import { Network } from "./Network";
import { GraphQLProvider } from "./GraphQL";
import { InputContainer, StyledInput, MainContainer, Titulos, RowContainer, Row } from '../src/RegistrarTransacao';
import CadastrarButton from './components/Buttons/cadastrarTransacaoButton';
import { id } from 'ethers/lib/utils';
        
interface IInputPropos {
  dappAddress: string 
}

export const Input: React.FC<IInputPropos> = (props) => {
  const rollups = useRollups(props.dappAddress); // Substitua pelo endereço real do seu contrato DApp

  const [formData, setFormData] = useState({
    method: 'addNewTransaction',
    id: '',
    product_id: '',
    price: '',
    receiver: '',
    hexInput: false,
    transaction_date: '',

    measure_unit: '',
    category: '',
    addressSupplier: '',
    addressBuyer: '',
    quantity: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let jsonData;

    if (formData.method === 'addNewTransaction') {
      jsonData = {
        method: 'addNewTransaction',
        data: {
          id: formData.id,
          receiver: formData.receiver,
          quantity: parseFloat(formData.quantity),
          price: parseFloat(formData.price),
          product_id: formData.product_id,
          transaction_date: formData.transaction_date
        }
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
    <div>
      <Header />
      <br />
      <Network />
      <GraphQLProvider>
        <form onSubmit={handleSubmit}>
          <MainContainer>
              <Titulos>
                <h1 id="titulo">Cadastro Transação</h1>
                <h5 id="descricao">Preencha os campos abaixo para o cadastro</h5>
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
                  placeholder='1234567'
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="product_id">ID do Produto:</label>
                <StyledInput
                  type="text"
                  id="product_id"
                  name="product_id"
                  value={formData.product_id}
                  onChange={handleInputChange}
                  placeholder='123456789'
                />
              </InputContainer>

              <InputContainer>
                <label htmlFor="transaction_date">Data da Transação:</label>
                <StyledInput
                  type="date"
                  id="transaction_date"
                  name="transaction_date"
                  value={formData.transaction_date}
                  onChange={handleInputChange}
                />
              </InputContainer>

            
            </Row>

            <Row>
            
              <InputContainer>
                <label htmlFor="quantity">Quantidade de Itens:</label>
                <StyledInput
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder='1.300'
                />
              </InputContainer>

            

            </Row>

            <Row>
              <InputContainer>
                  <label htmlFor="price">Valor da Compra:</label>
                  <StyledInput
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder='R$ 1000'
                  />
              </InputContainer>

              <InputContainer>
                  <label htmlFor="measure_unit">Unidade de Medida:</label>
                  <StyledInput
                    type="text"
                    id="measure_unit"
                    name="measure_unit"
                    value={formData.measure_unit}
                    onChange={handleInputChange}
                    placeholder='Caixas'
                  />
                </InputContainer>
            </Row>

              </RowContainer>
              
              <InputContainer>
              <label htmlFor="receiver">Endereço da Carteira do Comprador:</label>
              <StyledInput
                type="text"
                id="receiver"
                name="receiver"
                value={formData.receiver}
                onChange={handleInputChange}
                placeholder='0xAbCdEf123456789...'/> 
              </InputContainer>
            
            <CadastrarButton type="submit">Cadastrar</CadastrarButton>
            </MainContainer>
        </form>
      </GraphQLProvider>
    </div>
  );
};
export default Input;

