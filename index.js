import {Cliente} from './Cliente.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new Conta("corrente", 0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta("empresarial", 50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);