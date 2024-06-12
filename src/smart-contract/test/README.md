
# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
  <a href="https://www.inteli.edu.br/">
    <img src="../../assets/imagens/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="40%" height="40%">
  </a>
</p>


# Testes Automatizados

## ezTrack

## 🚀 Integrantes:

- <a href="https://www.linkedin.com/in/danielzular/">Daniel Zular</a>
- <a href="https://www.linkedin.com/in/davi-motta/">Davi Motta</a>
- <a href="https://www.linkedin.com/in/luizarsantana/">Luiza Santana</a>
- <a href="https://www.linkedin.com/in/mateus-mar%C3%A7al-212953264/">Mateus Marçal</a>
- <a href="https://www.linkedin.com/in/omatheusrsantos/">Matheus Ribeiro dos Santos</a>
- <a href="https://www.linkedin.com/in/stefano-parente-652822244/">Stefano Parente</a>

## Introdução
Este documento detalha os testes automatizados realizados no smart contract `ProcessoCotacao` para o projeto ezTrack, utilizando o framework Foundry. O objetivo é garantir a transparência e eficiência no gerenciamento das transações feitos pelos clientes da Alliance.

## Sobre o Foundry
Foundry é um conjunto de ferramentas para desenvolvimento e testes de smart contracts em Solidity, permitindo a realização de testes rápidos e confiáveis na rede Ethereum.

## Smart Contract

 O contrato `ProcessoCotacao` possui as seguintes funções: 
-  `registrarUsuario(address _usuario)`  
-  `cadastrarTransacao(...)`  
-  `validarTransacao(uint256 _idTransacao)`  
-  `obterHistoricoTransacoes()`  
-  `removerUsuario(address _usuario)`

A versão atual do contrato, que foi utilizada para fazer os testes, pode ser acessada [aqui](../src/EzTrack.sol).

## Metodologia de Teste
Utilizamos o comando `forge test` para executar os casos de teste e validar a lógica do contrato.
O arquivo de testes utilizado pode ser acessado [aqui](tests_EzTrack.sol).

## Casos de Teste

### Teste 1 - Registrar Usuário
#### Descrição
Este teste verifica se um novo usuário pode ser adicionado corretamente ao contrato.
#### Pré-condição
- O contrato já está implantado pelo proprietário do contrato.

#### Procedimento de Teste
1. Invocar a função `registrarUsuario` com um endereço Ethereum válido.
2. Verificação do mapeamento `usuarios` para confirmar o registro do usuário.

#### Resultado Esperado
- O endereço Ethereum fornecido deve ser autorizado no contrato.

#### Pós-condição
- O usuário está apto a executar ações restritas a usuários autorizados.

### Teste 2 - Cadastrar Transação
#### Descrição
Este teste confirma que uma transação pode ser cadastrada corretamente após o registro de um usuário.
#### Pré-condição
- O contrato está implantado pelo proprietário e o Teste 1 funciona corretamente.

#### Procedimento de Teste
1. Registro de um novo usuário semelhantemente ao teste anterior.
2. Criação de uma transação exemplo.
3. Verificação dos dados da transação.
4. Invocação da função `cadastrarTransacao`.

#### Resultado Esperado
- Os detalhes da transação devem estar armazenados corretamente, e o evento deve ser emitido.

#### Pós-condição
- A transação é registrada no histórico de transações do contrato.

### Teste 3 - Teste de Falha ao Cadastrar Transação por um usuário sem autorização
#### Descrição
Verifica se o contrato impede corretamente o cadastro de uma transação por um usuário não registrado.
#### Pré-condição
- O contrato está implantado e o Teste 2 funciona corretamente.
#### Procedimento de Teste
1. Tentativa de cadastro de transação por usuário não registrado.

#### Resultado Esperado
- A função falha e reverte com uma mensagem de erro específica.
#### Pós-condição
- Nenhuma transação adicional é registrada no contrato, mantendo o estado original.
### Teste 4 - Validar Transação
#### Descrição
Verifica se uma transação pode ser validada corretamente.
#### Pré-condição
- O contrato está implantado e todos os testes anteriores funcionaram corretamente.
#### Procedimento de Teste
1. Registro de um usuário.
2. Registro de uma transação fictícia.
3. Invocação da função `validarTransacao` e uso do ID da transação como parâmetro.

#### Resultado Esperado
- Transação é marcada como validada.
#### Pós-condição
- A transação específica é marcada como validada e o estado do contrato é atualizado para refletir esta validação.
### Teste 5 - Obter Histórico de Transações
#### Descrição
Testa a capacidade de obter o histórico de transações.

#### Pré-condição
- Existem transações registradas no contrato.

#### Procedimento de Teste
1. Registro de um usuário.
2. Solicitação do histórico de transações através da função `obterHistoricoTransacoes`.
	
#### Resultado Esperado
- Um array contendo todas as transações deve ser retornado.

#### Pós-condição
- Retorna um histórico vazio, indicando a ausência de transações feitas nesse teste.

### Teste 6 - Teste de Falha ao Validar Transação por um usuário sem autorização
#### Descrição
Verifica se a função `validarTransacao` falha apropriadamente quando chamada por um usuário sem permissão de validação.
#### Pré-condição
- O contrato está implantado e um usuário não foi adicionado pelo dono.
#### Procedimento de Teste
1. Registro de uma transação.
2. Tentativa de validação por um usuário não autorizado.

#### Resultado Esperado
- A função falha e reverte com uma mensagem de erro específica.

#### Pós-condição
- O estado do contrato não é alterado, a transação permanece não validada.

### Teste 7 - Remover Usuário
#### Descrição
Confirma se um usuário pode ser removido com sucesso do contrato.
#### Pré-condição
- O contrato está implantado e todos os testes funcionam corretamente.
#### Procedimento de Teste
1. Registro de um usuário.
2. Remoção do usuário.
3. Verificação para confirmar a remoção do usuário.

#### Resultado Esperado
- Usuário é removido corretamente do mapeamento `usuarios`.
#### Pós-condição
- O endereço do usuário removido não está mais autorizado a executar ações no contrato e o estado do contrato é atualizado para refletir esta remoção.

## Análise dos Resultados de Testes

![Resultado dos testes](![captura_testes](https://github.com/Inteli-College/2024-T0010-SI05-G01/assets/124260739/639d62e2-1ca7-434b-b626-1f3b1096f027)
Como explícito na captura de tela acima, todos os 7 testes automatizados passaram com sucesso, indicando que o contrato `ProcessoCotacao` atende aos casos de teste. Os testes foram concluídos rapidamente (2.70ms), mostrando eficiência na suíte de testes.

### Custo e Tamanho de Implantação
- **Custo de Implantação**: 961900 gas
- **Tamanho de Implantação**: 4154 bytes

### Análise de Funções e Custo de Gas
- `cadastrarTransacao`: 117539 gas (média), chamada 3 vezes.
- `obterHistoricoTransacoes`: 2629 gas, chamada 1 vez.
- `registrarUsuario`: 46077 gas (média), chamada 6 vezes.
- `removerUsuario`: 23960 gas, chamada 1 vez.
- `validarTransacao`: 287350 gas (média), chamada 1 vez.

Os custos variam, com `validarTransacao` sendo a mais custosa em termos de gas. A variação entre o custo mínimo e máximo indica a influência dos dados da transação e do estado do contrato.
### Observação
Foi identificado um erro no contrato onde não há validação que impede que o mesmo endereço atue como comprador e fornecedor, o que pode levar a conflitos de interesse e falhas de integridade nas transações.

### Conclusão
Os testes confirmam a eficiência do contrato, com custos de gas adequados para operação na rede principal. Além disso, foi identificando também uma área crítica de melhoria. 
