// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Test, console} from "../lib/forge-std/src/Test.sol";
import {ProcessoCotacao} from "../src/EzTrack.sol";

contract ProcessoCotacaoTest is Test {

    // Instância do contrato ProcessoCotacao
    ProcessoCotacao processoCotacao;

    address validador;
    uint256 idProduto;
    string dataTransacao;
    uint256 valorTransacao;
    uint256 valorUnitario;
    uint256 quantidadeTransacionada;
    string unidadeDeMedida;
    
    address user1 = address(0x123);

    function setUp() public {
        processoCotacao = new ProcessoCotacao();
    }

    // Função para testar o registro de um usuário
    function testRegistrarUsuario() public {

        // Chama a função registrarUsuario no contrato
        processoCotacao.registrarUsuario(user1);
        
        // Verifica se o usuário foi registrado corretamente
        bool userRegistered = processoCotacao.usuarios(user1);
        
        // Assertiva para verificar se o usuário foi registrado corretamente
        assertEq(userRegistered, true);
    }

    // Função para testar o registro de um usuário
    function testCadastrarTransacao() public {
        
        // Chama a função registrarUsuario no contrato e registra o usuário (msg.sender do teste)
        processoCotacao.registrarUsuario(address(this));

        // Atribui os elementos individuais à estrutura Transacao
        ProcessoCotacao.Transacao memory transacao = ProcessoCotacao.Transacao({
            transactionID: 1,
            validador: validador,
            idProduto: idProduto,
            dataTransacao: dataTransacao,
            valorTransacao: valorTransacao,
            valorUnitario: valorUnitario,
            quantidadeTransacionada: quantidadeTransacionada,
            unidadeDeMedida: unidadeDeMedida,
            transacaoValidada: false
        });

        // Assertivas para verificar se os dados da transação estão corretos
        assert(transacao.validador == validador);
        assert(transacao.idProduto == idProduto);
        assert(keccak256(abi.encodePacked(transacao.dataTransacao)) == keccak256(abi.encodePacked(dataTransacao)));
        assert(transacao.valorTransacao == valorTransacao);
        assert(transacao.valorUnitario == valorUnitario);
        assert(transacao.quantidadeTransacionada == quantidadeTransacionada);
        assert(keccak256(abi.encodePacked(transacao.unidadeDeMedida)) == keccak256(abi.encodePacked(unidadeDeMedida)));
        assert(transacao.transacaoValidada == false);

        // Chama a função cadastrarTransacao no contrato
        processoCotacao.cadastrarTransacao(validador, idProduto, dataTransacao, valorTransacao, valorUnitario, quantidadeTransacionada, unidadeDeMedida);
    }

    // Função para testar o erro no registro de um usuário
    function testFailCadastrarTransacao() public {

        // Esse método 'avisa' a VM que a próxima chamada de função deve falhar
        vm.expectRevert("Somente o proprietario do contrato pode realizar esta acao");

        // Chama a função cadastrarTransacao no contrato sem registrar o usuário
        processoCotacao.cadastrarTransacao(validador, idProduto, dataTransacao, valorTransacao, valorUnitario, quantidadeTransacionada, unidadeDeMedida);

        assert(false);
    }

    // Função para validar uma transação
    // Para testar essa função eu preciso ter alguma transação cadastrada e setar de forma manual o validador
    // Além disso, preciso chamar essa função com um usário que é validador

    // No entanto, não é interessante que o mesmo endereço de carteira seja validador e usuário

    // Função para testar a validação de uma transação
    function testValidarTransacao() public {
        processoCotacao.registrarUsuario(address(this));

        processoCotacao.cadastrarTransacao(address(this), 1, "01/01/2021", 100, 10, 10, "kg");

        processoCotacao.validarTransacao(1);
    }

    function testObterHistoricoTransacoes() public {
        processoCotacao.registrarUsuario(address(this));

        ProcessoCotacao.Transacao[] memory historicoTransacoes = processoCotacao.obterHistoricoTransacoes();

        assertEq(historicoTransacoes.length, 0);
    }

    // Como eu posso testar se um usuário foi removido?

    // Como eu posso testar se um mesmo usuário pode colocar a si mesmo como validador de uma transação?
    function testFailValidarTransacao() public {
        vm.expectRevert("Voce nao pode validar esta transacao.");

        processoCotacao.registrarUsuario(address(this));

        processoCotacao.cadastrarTransacao(address(this), 1, "01/01/2021", 100, 10, 10, "kg");

        processoCotacao.validarTransacao(1);
    }

    function testRomoveUsuario() public {
        processoCotacao.registrarUsuario(user1);

        processoCotacao.removerUsuario(user1);

        bool userRegistered = processoCotacao.usuarios(user1);

        assertEq(userRegistered, false);
    }
}