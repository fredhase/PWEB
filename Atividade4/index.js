window.onload=function(){
  const btnRock = document.getElementById('rock');
  const btnPaper = document.getElementById('paper');
  const btnScissor = document.getElementById('scissor');
  const textPlayer = document.getElementById('player');
  const textPc = document.getElementById('pc');
  const textResult = document.getElementById('result-text');


  let player = 0;
  let pc = 0;

  const playGame = () => {
    pc = Math.floor(Math.random()*10);
    switch(pc) {
      case 0:
      case 1:
      case 2:
      case 3: pc = 1;
              textPc.innerText = "Computador [ Pedra ]"
              break;

      case 4:
      case 5:
      case 6: pc = 2;
              textPc.innerText = "Computador [ Papel ]"
              break;

      case 7:
      case 8:
      case 9: pc = 3;
              textPc.innerText = "Computador [ Tesoura ]"
              break;
    }
    
    if(player === 1) {
      if (pc === 1){
        textResult.innerText = "Empate";
      }
      if (pc === 2){
        textResult.innerText = "Você perdeu";
      }
      if (pc === 3){
        textResult.innerText = "Você venceu";
      }
    }

    if(player === 2) {
      if (pc === 1){
        textResult.innerText = "Você venceu";
      }
      if (pc === 2){
        textResult.innerText = "Empate";
      }
      if (pc === 3){
        textResult.innerText = "Você perdeu";
      }
    }

    if(player === 3) {
      if (pc === 1){
        textResult.innerText = "Você perdeu";
      }
      if (pc === 2){
        textResult.innerText = "Você venceu";
      }
      if (pc === 3){
        textResult.innerText = "Empate";
      }
    } 
  }

  btnRock.addEventListener('click', () => {
    player = 1;
    textPlayer.innerText = "Jogador [ Pedra ]";
    playGame();
  });

  btnPaper.addEventListener('click', () => {
    player = 2;
    textPlayer.innerText = "Jogador [ Papel ]";
    playGame();
  });

  btnScissor.addEventListener('click', () => {
    player = 3;
    textPlayer.innerText = "Jogador [ Tesoura ]";
    playGame();
  });
}