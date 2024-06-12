import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";
import CadastrarButton from "./components/Buttons/cadastrarTransacaoButton";
import { Link } from "react-router-dom";
import { Inspect } from "./Inspect";
import { utils } from "ethers";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 1.75rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

const PageButton = styled.button`
  margin-left: 0.375rem;
  margin-right: 0.375rem;
  padding: 0.35rem 0.78rem;
  background-color: transparent;
  border: 0.11rem solid #1e2225;
  border-radius: 0.365rem;
  color: #1e2225;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #1e2225;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1.25rem;
`;

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataReq, setDataReq] = useState<any>(null);

  function hexToString(hex: string) {
    let string = "";
    for (let i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string.replace(/\s/g, '');
  }

  useEffect(() => {
    const fetchProductsWithTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/inspect/mean");
        const data = response.data;

        console.log("data" + data);

        const json = hexToString(data["reports"]["0"]["payload"]); 
        
        console.log("json" + json);

        setDataReq(json);

        console.log("DataReq" + dataReq);
        console.log(dataReq);
      } catch (error) {
        console.error("Error fetching products with transactions", error);
      }
    };

    // Call the function to fetch the data
    fetchProductsWithTransactions();
  }, []);

  console.log(dataReq);

  // const cardsData = [

  //   { productName: "Produto 1", quantity: 3, price: 20 },
  //   { productName: "Produto 2", quantity: 5, price: 15 },
  //   { productName: "Produto 3", quantity: 2, price: 30 },
  //   { productName: "Produto 4", quantity: 6, price: 25 },
  //   { productName: "Produto 5", quantity: 4, price: 18 },
  //   { productName: "Produto 6", quantity: 7, price: 22 },
  //   { productName: "Produto 7", quantity: 3, price: 17 },
  //   { productName: "Produto 8", quantity: 8, price: 28 },
  //   { productName: "Produto 9", quantity: 5, price: 21 },
  //   { productName: "Produto 10", quantity: 2, price: 14 },
  //   { productName: "Produto 11", quantity: 4, price: 19 },
  //   { productName: "Produto 12", quantity: 9, price: 27 },
  //   { productName: "Produto 13", quantity: 6, price: 23 },
  //   { productName: "Produto 14", quantity: 3, price: 16 },
  //   { productName: "Produto 15", quantity: 7, price: 24 },
  // ];
  
  return (
    <div>
      <Header />
    
      <h1>Visualização do cálculo do preço médio pelo ID do Produto</h1>
      <div>
        {JSON.stringify(dataReq, null, 2)}
      </div>
    </div>
    // <PageContainer>
    //   <HeaderContainer>
    //     <Header />
    //   </HeaderContainer>
    //   <CardsContainer>

    //     {/* <Card
    //       id={"1"}
    //       price={"10000"}
    //     />

    //     <Card
    //       id = {dataReq[0]}
    //       price={dataReq[1]}
    //     /> */}
    //     {/* {currentCards.map((data, index) => (
    //       <Card
    //         key={index}
    //         productName={data.productName}
    //         quantity={data.quantity}
    //         price={data.price}
    //       />
    //     ))} */}
    //     {/* {dataReq.map((data: { id: string, price: number }) => (
    //       <Card
    //         id={data.id}
    //         price={data.price}
    //       />
    //     ))} */}
        
    //   </CardsContainer>
    //   <ButtonContainer>
    //     <CadastrarButton>
    //       <Link to="/RegistrarTransacao">Cadastrar Transação</Link>
    //     </CadastrarButton>
    //   </ButtonContainer>
    //   {/* <PaginationContainer>
    //     {Array.from({ length: totalPages }, (_, i) => (
    //       <PageButton key={i + 1} onClick={() => paginate(i + 1)}>
    //         {i + 1}
    //       </PageButton>
    //     ))}
    //   </PaginationContainer> */}
    // </PageContainer>
  );
};

export default HomePage;
