export class ContaCorrente{
  agencia;
  cliente;
  // #saldo = 0;
  _saldo = 0;

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }
    console.log(this._saldo);
  }

  depositar(valor){
    if(valor <= 0){
      return;
    }
    this._saldo += valor;
    console.log(this._saldo);
  }

  transferir(valor, cliente) {
    const valorSacado = this.sacar(valor);
    cliente.depositar(valorSacado);
  }
}