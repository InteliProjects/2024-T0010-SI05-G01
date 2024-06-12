import React, { useState } from 'react';
import { InputContainer, StyledInput } from '../Input/style';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <InputContainer>
      <h3 id="campoInput">Campo de Entrada:</h3>
      <StyledInput
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
    </InputContainer>
  );
};

export default InputComponent;
