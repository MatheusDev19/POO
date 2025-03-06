import * as readline from "readline-sync";
import { Bank } from "./bank";
import { BankAccount } from "./account";

const bank = new Bank();

function addAccount(): void {
    console.log("\n--- Criar Nova Conta ---");
    const holder = readline.question("Nome do Titular: ");
    const numberAccount = Number(readline.question("Número da Conta: "));
    const initialBalance = Number(readline.question("Saldo Inicial: "));

    if (isNaN(numberAccount) || isNaN(initialBalance)) {
        console.log("Erro: Número da conta e saldo inicial devem ser valores numéricos.");
        return;
    }

    const newAccount = new BankAccount(initialBalance, holder, numberAccount);
    bank.addAccount(newAccount);
    console.log("Conta criada com sucesso!");
}

function acessAccount(): void {
    console.log("\n--- Acessar Conta ---");
    const numberAccount = Number(readline.question("Digite o número da conta: "));
    const account = bank.searchAccounts(numberAccount);

    if (!account) {
        console.log("Conta não encontrada!");
        return;
    }

    while (true) {
        console.log("\n--- Operações ---");
        console.log("1 - Depositar");
        console.log("2 - Sacar");
        console.log("3 - Ver Saldo");
        console.log("4 - Voltar");

        const option = readline.question("Escolha uma opção: ");

        switch (option) {
            case "1":
                const depositValue = Number(readline.question("Valor para depositar: "));
                account.depositValue(depositValue);
                break;
            case "2":
                const valorSaque = Number(readline.question("Valor para sacar: "));
                account.withdrawValue(valorSaque);
                break;
            case "3":
                account.seeBalance();
                break;
            case "4":
                return;
            default:
                console.log("Opção inválida! Escolha novamente.");
        }
    }
}

function menu(): void {
    while (true) {
        console.log("\n--- Menu Principal ---");
        console.log("1 - Criar Conta");
        console.log("2 - Acessar Conta");
        console.log("3 - Listar Contas");
        console.log("4 - Sair");

        const option = readline.question("Escolha uma opção: ");

        switch (option) {
            case "1":
                addAccount();
                break;
            case "2":
                acessAccount();
                break;
            case "3":
                bank.listAccounts();
                break;
            case "4":
                console.log("Saindo do sistema...");
                return;
            default:
                console.log("Opção inválida! Escolha novamente.");
        }
    }
}

// Inicia o programa
menu();
