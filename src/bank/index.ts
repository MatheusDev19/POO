import { BankAccount } from "../account";

export class Bank {
  private account: BankAccount[] = [];

  // adicionar contas
  addAccount(account: BankAccount): void {
    this.account.push(account); // push cria uma conta
  }

  // buscar contas
  searchAccounts(numberAccount: number): BankAccount | undefined {
    return this.account.find(
      // find procura as contas
      (account) => account.getAccountNumber() === numberAccount
    );
  }

  // listar contas
  listAccounts(): void { // quando nao tem return
    console.log("lista de todas as contas: ");
    this.account.forEach((account) => {
      console.log(
        `Titular: ${account.getHolder()},  Numero da conta: ${account.getAccountNumber()} Saldo: ${account.getBalance()}`
      );
    });
  }
}
