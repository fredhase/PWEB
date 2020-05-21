let Aluno1 = {
  RA: 1234,
  Nome: 'João'
};

console.log(Aluno1);

let Aluno2 = new Object();
Aluno2.RA = 765;
Aluno2.name = 'Sandra';

console.log(Aluno2);

function Aluno(RA, Nome) {
  this.RA = RA;
  this.Nome = Nome;
}

let Aluno3 = new Aluno(908, 'Roberta')

console.log(Aluno3);