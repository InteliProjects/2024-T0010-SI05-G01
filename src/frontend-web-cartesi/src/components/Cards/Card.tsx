import React from 'react';
import styled from 'styled-components';

type CardProps = {
  id: string;
  price: number;
};

const CardContainer = styled.div`

  background-color: white;
  border-radius: 10px;
  border: 2px solid #E9E7FD;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease;
  max-width: 300px;
  margin-left: 1.875rem;
  margin-right: 1.875rem;
  margin-top: 1.25rem;
  width: 9rem;
  font-family: 'Public Sans', Arial;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    border-color: #7DEFFF;
  }
`;

const ProductName = styled.h3`
  font-size: 0.8rem;
  font-weight: 1800;
  color: #1E2225;
  margin: 0 0 8px 0;
`;

const Quantity = styled.p`
  font-size: 0.675rem;
  color: #5D666E;
  margin: 0 0 16px 0;
`;

const Price = styled.h3`
  font-size: 0.8rem;
  font-weight: 1800;
  color: #1E2225;
  margin: 0 0 16px 0;
  flex: end;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #7DEFFF;
  margin: 0 0 16px 0;
  width: 100%;
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// React component
const Card: React.FC<CardProps> = ({ id, price }) => {
  return (
    <CardContainer>
      <ProductName>{id}</ProductName>
      <Value>
        <Price>R${price}</Price>
        <Divider />
      </Value>
    </CardContainer>
  );
};

export default Card;
