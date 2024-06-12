import styled from "styled-components";
// criação do style
export const InputContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: fit-content;
`;

export const StyledInput = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  color: #1e2225; /* Cor do texto */
  font-size: 0.9rem;
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
    color: #a0a0a0; /* Cor do texto de placeholder */
  }

  &:focus {
    border-bottom-color: #7defff; /* Cor da linha de baixo ao focar */
  }
`;
