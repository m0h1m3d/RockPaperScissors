const body = document.querySelector('body');
const main = document.querySelector('.main');
const playBtn = document.querySelector('.play');
const game = document.querySelector('.game');
const btns = document.querySelectorAll('button');
const playerSign = document.querySelector('.player-sign');
const computerSign = document.querySelector('.cpu-sign');
const result = document.querySelector('.result');
const div = document.createElement('div');
      div.classList.add('mob');

let playerScore = 0,
    computerScore = 0;

function playerPlay() {
  btns.forEach((button) => {
    button.addEventListener('click', (e) => {
      
      button.classList.add('clicked');
      setTimeout(function(){
        button.classList.remove('clicked');
      }, 200);

      const playerSelection = button.id;
      playerSign.textContent = button.id;
      console.log(`Player selected: ${playerSelection}`);

      const computerSelection = cpuPlay();
      computerSign.textContent = computerSelection;
      console.log(`Computer selected: ${computerSelection}`);

      result.style.textAlign = 'center';
      result.style.fontSize = '1.2rem';
      result.style.height = '50%';

      gameLogic(playerSelection, computerSelection);
      gameOver();
    });
  });
}

function gameOver(){
    if (playerScore === 5){
        game.style.display = 'none';
        main.style.display = 'none';
        div.textContent = "Game Over! you win!";
        div.style.color = 'green';
        body.appendChild(div);
    }
    else if(computerScore === 5){
        game.style.display = 'none';
        main.style.display = 'none';
        div.textContent = "Game Over! you lose!";
        div.style.color = 'red';
        body.appendChild(div);
    }
}

const choices = ['✊🏻', '✋🏻', '✌🏼'];
function cpuPlay() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function gameLogic(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // console.log(`"It is a tie!. the score is:${playerScore}:${computerScore}"`);
    result.textContent = `It is a tie!.\n the score is:${playerScore}:${computerScore}`;
  } else if (
    (playerSelection === '✊🏻' && computerSelection === '✌🏼') ||
    (playerSelection === '✋🏻' && computerSelection === '✊🏻') ||
    (playerSelection === '✌🏼' && computerSelection === '✋🏻')
  ) {
    playerScore++;
    // console.log(`"You win this round!. the score is:${playerScore}:${computerScore}"`);
    result.textContent = `You win this round!.\n the score is:${playerScore}:${computerScore}`;
    
  } else {
    computerScore++;
    // console.log(`"computer wins this round!. the score is:${playerScore}:${computerScore}"`);
    result.textContent = `computer wins this round!.\n the score is:${playerScore}:${computerScore}`;
  }
}

playBtn.addEventListener('click', (e) => {
  main.style.opacity = '0';
  game.style.opacity = '1';
  game.style.zIndex = '3';
  playerPlay();
});