"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const bank_1 = require("./bank");
const account_1 = require("./account");
const bank = new bank_1.Bank();
function addAccount() {
    console.log("\n--- Criar Nova Conta ---");
    const holder = readline.question("Nome do Titular: ");
    const numberAccount = Number(readline.question("Número da Conta: "));
    const initialBalance = Number(readline.question("Saldo Inicial: "));
    if (isNaN(numberAccount) || isNaN(initialBalance)) {
        console.log("Erro: Número da conta e saldo inicial devem ser valores numéricos.");
        return;
    }
    const newAccount = new account_1.BankAccount(initialBalance, holder, numberAccount);
    bank.addAccount(newAccount);
    console.log("Conta criada com sucesso!");
}
function acessAccount() {
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
function menu() {
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
