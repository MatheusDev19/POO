"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor() {
        this.account = [];
    }
    // adicionar contas
    addAccount(account) {
        this.account.push(account); // push cria uma conta
    }
    // buscar contas
    searchAccounts(numberAccount) {
        return this.account.find(
        // find procura as contas
        (account) => account.getAccountNumber() === numberAccount);
    }
    // listar contas
    listAccounts() {
        console.log("lista de todas as contas: ");
        this.account.forEach((account) => {
            console.log(`Titular: ${account.getHolder()},  Numero da conta: ${account.getAccountNumber()} Saldo: ${account.getBalance()}`);
        });
    }
}
exports.Bank = Bank;
