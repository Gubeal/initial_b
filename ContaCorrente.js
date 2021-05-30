import { Cliente } from "./Cliente.js";

export class ContaCorrente{
  static _numeroDeContas = 0;
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  set cliente(novoValor){
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }

  get saldo(){
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    this._saldo = 0;
    ContaCorrente._numeroDeContas += 1;
  }
  sacar(valor) {
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 0){
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, cliente) {
    const valorSacado = this.sacar(valor);
    cliente.depositar(valorSacado);
  }
}