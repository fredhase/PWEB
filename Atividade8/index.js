window.onload = function() {
  const janela = document.getElementById("janela");

  janela.addEventListener('mouseover', () => {
    janela.src = "./imgs/janelaaberta.png";
  });

  janela.addEventListener('mouseleave', () => {
    janela.src = "./imgs/janelafechada.png";
  });

  janela.addEventListener('click', () => {
    janela.src = "./imgs/janelaquebrada.png"
  });
}