export class ContaBancaria {
  private saldo: number;
  private titular: string;
  private numeroDaConta: number;

  constructor(saldo: number, titular: string, numeroDaConta: number) {
    this.saldo = saldo;
    this.titular = titular;
    this.numeroDaConta = numeroDaConta;
  }

  depositarValor(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depositado ${valor}. Seu novo saldo é: ${this.saldo}.`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  sacarValor(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Sacado ${valor}. Novo saldo é ${this.saldo}.`);
    } else {
      console.log("Valor de saque inválido.");
    }
  }

  verSaldo(): void {
    console.log(`O saldo atual é ${this.saldo}.`);
  }

  getSaldo(): number {
    return this.saldo;
  }

  getTitular(): string {
    return this.titular;
  }

  getNumeroDaConta(): number {
    return this.numeroDaConta;
  }
}
