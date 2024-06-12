import React from "react";
import Header from "./components/Header/Header";
import CadastrarButton from "./components/Buttons/cadastrarTransacaoButton";
import Img1 from "../src/imgs/bitcoin_ezTrack.png";
import Imgage from "../src/imgs/securityShield_ezTrack.png";
import {
  Container,
  MainSection,
  Div1,
  Dyv2,
  Dv3,
  Section,
  Subtitle,
  Text,
  Image,
  Img2,
  List,
  ListItem,
  TxtBold,
  ComoFunciona,
  ComoFuncionaTopico,
  Footer
} from '../src/InstrucoesStyle';
import { Link } from "react-router-dom";

const Instrucoes: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <Section>
          <Div1>
            <div>
                <Subtitle>O que é o ezTrack?</Subtitle>
                <Text>É uma plataforma inovadora para você registrar as transações de compra e venda que você pratica em determinados produtos, e contribuir para que todos saibam o preço médio praticado nesses mesmos produtos. Tudo isso de forma prática, transparente e confiável, utilizando tecnologias de Blockchain.</Text>
            </div>
            <Image src={Img1} alt="Bitcoin e Blockchain" />
          </Div1>
        </Section>
        <Section>
            <Dyv2>
                <ComoFunciona>Como funciona?</ComoFunciona>
                <List>
                    <ListItem>
                        <TxtBold>Cadastro de Transações de Produtos</TxtBold>
                        <ComoFuncionaTopico> Comece cadastrando os produtos. Insira detalhes relevantes, como nome, descrição, categoria e outras informações pertinentes indicadas nos campos. </ComoFuncionaTopico>
                    </ListItem>
                    <ListItem>
                        <TxtBold>Análise de Precificação Média</TxtBold>
                        <ComoFuncionaTopico>Após o cadastro dos produtos, nossa plataforma utiliza algoritmos avançados para coletar e analisar dados de transações recentes relacionadas aos produtos cadastrados para obter o cálculo do preço médio daquele determinado produto.</ComoFuncionaTopico>
                    </ListItem>
                    <ListItem>
                        <TxtBold>Transparência e Segurança</TxtBold>
                        <ComoFuncionaTopico>Todas as transações e informações são registradas de forma transparente e segura na blockchain, garantindo integridade e confiabilidade dos dados.</ComoFuncionaTopico>
                    </ListItem>
                </List>
            </Dyv2>
        </Section>
        <Section>
            <Dv3>
                <Subtitle>Pronto para começar?</Subtitle>
                <Text>Cadastre-se agora e comece a aproveitar os benefícios da Plataforma de Cadastro de Produtos para Precificação Média em Web 3.0!</Text>
                <CadastrarButton>
                  <Link to="/RegistrarTransacao" style={{ textDecoration: 'none', color: 'inherit' }}>Cadastrar Transação</Link>
                </CadastrarButton>
            </Dv3>
          <Img2 src={Imgage} alt="Segurança e Blockchain" />
        </Section>
      </MainSection>
      <Footer>
        Nota: Esta plataforma opera na Web 3.0, utilizando tecnologias avançadas para garantir segurança, descentralização e eficiência. Estamos comprometidos em fornecer uma experiência excepcional aos nossos usuários.
      </Footer>
    </Container>
  );
};
export default Instrucoes;