export class Conta{
  constructor(saldoInicial, cliente, agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

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

  sacar(valor) {
    let taxa = 1;
    const valorSacado = taxa * valor;
    if (this._tipo == "contacorrente"){
      taxa = 1.1;
    }
    if (this._tipo == "salario"){
      taxa = 1.05;
    }
    if (this._tipo == "empresarial"){
      taxa = 1.15;
    }
    if (this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }

  depositar(valor) {
    if (valor <= 100) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta){
    if (this._tipo == "salario"){
      return;
    }
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}