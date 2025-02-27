"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
const conta = new account_1.ContaBancaria(1000, 'Matheus Rodrigues', 123123);
conta.verSaldo();
conta.depositarValor(1000);
conta.sacarValor(500);
