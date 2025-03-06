"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance, holder, accountNumber) {
        this.balance = balance;
        this.holder = holder;
        this.AccountNumber = accountNumber;
    }
    depositValue(value) {
        if (value > 0) {
            this.balance += value;
            console.log(`Depositado ${value}. Seu novo saldo é: ${this.balance}.`);
        }
        else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }
    withdrawValue(value) {
        if (value > 0 && value <= this.balance) {
            this.balance -= value;
            console.log(`Sacado ${value}. Novo saldo é ${this.balance}.`);
        }
        else {
            console.log("Valor de saque inválido.");
        }
    }
    seeBalance() {
        console.log(`O saldo atual é ${this.balance}.`);
    }
    getBalance() {
        return this.balance;
    }
    getHolder() {
        return this.holder;
    }
    getAccountNumber() {
        return this.AccountNumber;
    }
}
exports.BankAccount = BankAccount;
