export class ContaCorrente{
  agencia;
  // #saldo = 0;
  _saldo = 0;

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
    }
    console.log(this._saldo);
  }

  depositar(valor){
    if(valor > 0){
      this._saldo += valor;
    }
    console.log(this._saldo);
  }

}