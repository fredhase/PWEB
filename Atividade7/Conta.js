function Conta() {
  let nome;
  let banco;
  let numeroConta;
  let saldo;

  this.getNome = function() {
    return nome;
  };

  this.getBanco = function() {
    return banco;
  };

  this.getNumConta = function() {
    return numeroConta;
  };

  this.getSaldo = function() {
    return saldo;
  };

  this.setNome = function(value) {
    nome = value;
  };

  this.setBanco = function(value) {
    banco = value;
  };

  this.setNumconta = function(value) {
    numeroConta = value;
  };

  this.setSaldo = function(value) {
    saldo = value;
  };
};

function ContaCorrente() {
  let saldoEspecial;

  this.getSaldoEsp = function() {
    return saldoEspecial;
  };

  this.setSaldoEsp = function(value) {
    saldoEspecial = value;
  };
};

function ContaPopuança() {
  let juros;
  let dataVenc;

  this.getJuros = function() {
    return juros;
  };

  this.getDataVenc = function() {
    return dataVenc;
  };

  this.setJuros = function(value) {
    juros = value;
  };

  this.setDataVenc = function(value) {
    dataVenc = value;
  };
}

ContaCorrente.prototype = new Conta();
ContaPopuança.prototype = new Conta();

ContaC = new ContaCorrente();
ContaC.setNome('Joverson');
ContaC.setNumconta(5467);
ContaC.setBanco('Intar');
ContaC.setSaldo(3000);
ContaC.setSaldoEsp(2000);

console.log(
  "Conta Corrente: \n" + 
  "Nome: " + ContaC.getNome() + "\n" +
  "Banco: " + ContaC.getBanco() + "\n" +
  "Número da Conta: " + ContaC.getNumConta() + "\n" +
  "Saldo: " + ContaC.getSaldo() + "\n" +
  "Saldo Especial: " + ContaC.getSaldoEsp()
)

ContaP = new ContaPopuança();
ContaP.setNome('Veiverson');
ContaP.setNumconta(9876);
ContaP.setBanco('No S.A.');
ContaP.setSaldo(5000);
ContaP.setJuros(3);
ContaP.setDataVenc("03/07/2021");

console.log(
  "Conta Poupança: \n" + 
  "Nome: " + ContaP.getNome() + "\n" +
  "Banco: " + ContaP.getBanco() + "\n" +
  "Número da Conta: " + ContaP.getNumConta() + "\n" +
  "Saldo: " + ContaP.getSaldo() + "\n" +
  "Juros: " + ContaP.getJuros() + "% \n" +
  "Data de Vencimento: " + ContaP.getDataVenc()
)