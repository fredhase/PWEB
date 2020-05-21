window.onload=function() {
  const number1 = document.getElementById("n1");
  const number2 = document.getElementById("n2");
  const number3 = document.getElementById("n3");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  const compare = (n1, n2, n3) => {
    if (n1 === n2 && n2 === n3 ) {
      return "Todos iguais!"
    }
    if ((n1 > n2 && n2 === n3) || (n1 > n2 && n1 > n3)) {
      return ("Maior: " + n1);
    }
    if ((n2 > n1 && n1 === n3) || (n2 > n1 && n2 > n3)) {
      return ("Maior: " + n2);
    }
    if (n1 === n2 && n1 > n3) {
      return ("Maiores: " + n1 + " " + n2);
    }
    if (n1 === n3 && n1 > n2) {
      return ("Maiores: " + n1 + " " + n3);
    }
    if (n3 === n2 && n3 > n1) {
      return ("Maiores: " + n2 + " " + n3);
    }
    return ("Maior: " + n3);
  };

  btn.addEventListener('click', () => {
    let n1 = Number(number1.value);
    let n2 = Number(number2.value);
    let n3 = Number(number3.value);

    result.innerText = compare(n1, n2, n3);
  });

}