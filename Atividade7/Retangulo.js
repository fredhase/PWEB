function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcArea = function () {
    return base * altura;
  }
}

let newRet = new Retangulo(5, 7);

console.log(newRet.calcArea());