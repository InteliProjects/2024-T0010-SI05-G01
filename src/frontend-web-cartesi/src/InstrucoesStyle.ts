import styled from 'styled-components';
export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;
export const MainSection = styled.main`
  
`;
export const Div1 = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding: 2.5rem;
`
export const Dyv2 = styled.div `
  background-color: #1E2225;
`
export const Dv3 = styled.div`
  display:flex;
  flex-direction: column;
  flex: end;
  justify-content: space-around;
  padding-left: 2rem;
  padding-right: 2rem;
  padding: 2.5rem;
`
export const Img2 = styled.img`
  flex:end;
  width: 20%;
  height: 20%;
  margin-bottom: 20px;
  margin-left: 4rem;
  margin-right: 2.5rem;
`
export const ContainerEscrita = styled.div`
  flex-direction: column;
  max-width: 624px;
  max-height: 250px;
`
export const Section = styled.section`
  justify-content: space-between;
  margin-bottom: 40px;
  display:flex;
`;

export const TxtBold = styled.h5`
  font-weight: 700;
  color: #FEFEFE;
  font-size: 1.5rem;
  font-family: 'Public Sans', Arial;
  margin-bottom: 20px;
`

export const ComoFuncionaTopico = styled.h2 `
  color: #FEFEFE;
  font-weight: 300;
  font-size: 1.5rem;
  font-family: 'Public Sans', Arial;
  padding-bottom: 2.5rem;
  margin: 10px;
`
export const Subtitle = styled.h2`
  color: #1E2225;
  font-family: 'Poppins';
  font-size: 2.75rem;
  margin-bottom: 5px;
  padding-left: 2.5rem;
`;
export const Text = styled.h5`
  color: #8B909A;
  font-weight: 500;
  font-size: 1.5rem;
  font-family: 'Public Sans', Arial;
  margin-bottom: 20px;
  padding-left: 2.5rem;
`;
export const Image = styled.img`
  max-width: 15rem;
  height: auto;
  margin-bottom: 20px;
  margin-left: 4rem;
  margin-right: 2.5rem;
`;

export const ComoFunciona = styled.h2`
  color: #FEFEFE;
  font-family: 'Poppins';
  font-size: 2.5rem;
  padding-top: 2.5rem;
  padding-left: 2.5rem;
  margin: 5px; 
`
export const List = styled.ul`
  list-style: none;
  padding: 5rem;
`;
export const ListItem = styled.li`
  margin-bottom: 20px;
`;
export const Footer = styled.footer`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
  color: #CCCCCC;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
// Se você quiser estilizar o botão com styled-components, você pode fazer assim:
export const CadastrarButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45A049;
  }
`;