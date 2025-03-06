import { BankAccount } from "./account";
import { Bank } from './bank'

const bank = new Bank();

const conta1 = new BankAccount(20000, "Matheus Rodrigues", 11);
const conta2 = new BankAccount(4000, "Luan Otavio", 22);
const conta3 = new BankAccount(1000, "Davi Rodrigues", 33);

// Adicionando contas ao banco
bank.addAccount(conta1)
bank.addAccount(conta2)
bank.addAccount(conta3)

// Listando todas as contas
bank.listAccounts();

//buscando uma conta expecifica
const accountFound = bank.searchAccounts(22)

if (accountFound) {
    console.log(`Conta encontrada! Titular: ${accountFound.getHolder()}, Saldo: R$${accountFound.getBalance()}`);
} else {
    console.log("Conta não encontrada.");
}