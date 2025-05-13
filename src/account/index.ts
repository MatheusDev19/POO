export class BankAccount {
  private balance: number;
  private holder: string;
  private AccountNumber: number;

  constructor(balance: number, holder: string, accountNumber: number) {
    this.balance = balance;
    this.holder = holder;
    this.AccountNumber = accountNumber;
  }

  depositValue(value: number): void {
    if (value > 0) {
      this.balance += value;
      console.log(`Depositado ${value}. Seu novo saldo é: ${this.balance}.`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  withdrawValue(value: number): void {
    if (value > 0 && value <= this.balance) {
      this.balance -= value;
      console.log(`Sacado ${value}. Novo saldo é ${this.balance}.`);
    } else {
      console.log("Valor de saque inválido.");
    }
  }

  seeBalance(): void {
    console.log(`O saldo atual é ${this.balance}.`);
  }

  getBalance(): number {
    return this.balance
  }

  getHolder(): string {
    return this.holder;
  }

  getAccountNumber(): number {
    return this.AccountNumber;
  }
}
