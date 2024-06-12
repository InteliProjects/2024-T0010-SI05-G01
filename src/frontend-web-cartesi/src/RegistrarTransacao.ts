import styled from "styled-components";

// criação do style
export const InputContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: fit-content;
  justify-content: center;
  padding-top: 1.25rem;
  justify-content:space-between;
`;

export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';

  border-radius: 10px;
  padding: 1.25rem;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2rem;
`

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: space-between;
`
export const Titulos = styled.div`
  
  display: column;
  flex-direction: start;
  padding: none;

  #titulo {
    font-weight: bold;
    font-size: 2.5rem;
  }

  #descricao {
    font-weight: 300;
    font-size: 1.5rem;
    color: #8B909A;
  }
`
  
export const StyledInput = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  color: #1e2225; /* Cor do texto */
  font-size: 0.9rem;
  font-family: 'Poppins';
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-bottom: 1.6px solid #1e2225;
  transition: border-bottom-color 0.3s;
  outline: none;

  &::placeholder {
    color: #a0a0a0; 
  }

  &:focus {
    border-bottom-color: #7defff; 
    background-color: #D3FAFF;
  }
  
`;


