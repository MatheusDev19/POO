import { ContaBancaria } from "./account";

const conta = new ContaBancaria(1000, "Matheus Rodrigues", 123123);

conta.verSaldo();
conta.depositarValor(1000);
conta.sacarValor(500);
