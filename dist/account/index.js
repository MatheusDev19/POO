"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(saldo, titular, numeroDaConta) {
        this.saldo = saldo;
        this.titular = titular;
        this.numeroDaConta = numeroDaConta;
    }
    depositarValor(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depositado ${valor}. Seu novo saldo é: ${this.saldo}.`);
        }
        else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }
    sacarValor(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Sacado ${valor}. Novo saldo é ${this.saldo}.`);
        }
        else {
            console.log("Valor de saque inválido.");
        }
    }
    verSaldo() {
        console.log(`O saldo atual é ${this.saldo}.`);
    }
    getSaldo() {
        return this.saldo;
    }
    getTitular() {
        return this.titular;
    }
    getNumeroDaConta() {
        return this.numeroDaConta;
    }
}
exports.ContaBancaria = ContaBancaria;
