const body = document.querySelector('body');
const main = document.querySelector('.main');
const playBtn = document.querySelector('.play');
const game = document.querySelector('.game');
const btns = document.querySelectorAll('button');
const playerSign = document.querySelector('.player-sign');
const computerSign = document.querySelector('.cpu-sign');
const result = document.querySelector('.result');
const mob = document.querySelector('.mob');
const re = document.querySelector('.reDiv')
const restart = document.querySelector('.restart');
const shadow = document.querySelector('.shadow');

let playerScore = 0,
    computerScore = 0;

playBtn.addEventListener('click', (e) => {
  playerScore === 0;
  computerScore === 0;

  main.style.display = 'none';
  main.style.opacity = '0';
  game.style.display = 'block';
  game.style.opacity = '1';
  re.style.display = 'none';
  playerPlay();
});


function playerPlay() {
  btns.forEach((button) => {
    button.addEventListener('click', (e) => {
      
      button.classList.add('clicked');
      setTimeout(function(){
        button.classList.remove('clicked');
      }, 200);

      playerSelection = button.id;
      playerSign.textContent = button.id;
      console.log(`Player selected: ${playerSelection}`);

      computerSelection = cpuPlay();
      computerSign.textContent = computerSelection;
      console.log(`Computer selected: ${computerSelection}`);

      result.style.textAlign = 'center';
      result.style.fontSize = '1.2rem';
      result.style.height = '50%';
      result.style.color = 'white';

      gameLogic(playerSelection, computerSelection);
      gameOver();
    });
  });
}

restart.addEventListener('click', (e) => {
  restartGame();
})


function restartGame(){
  playerScore === 0;
  computerScore === 0;

  window.location.reload();
}


function gameOver(){
  if (playerScore === 5){
    playerScore === 0;
    computerScore === 0;

      game.style.display = 'none';
      main.style.display = 'none';
      re.style.display = 'flex';
      re.style.justifyContent = 'center';
      re.style.alignItems = 'center';
      mob.textContent = "Game Over! you win!";
      mob.style.color = 'rgb(109, 233, 109)';
  }
  else if(computerScore === 5){
    computerScore === 0;
    playerScore === 0;

      game.style.display = 'none';
      main.style.display = 'none';
      re.style.display = 'flex';
      re.style.justifyContent = 'center';
      re.style.alignItems = 'center';
      mob.textContent = "Game Over! you lose!";
      mob.style.color = 'rgb(255, 110, 110)';
  }

}

const choices = ['✊🏻', '✋🏻', '✌🏼'];
function cpuPlay() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function gameLogic(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
       result.textContent = `Tie! player score = ${playerScore}  computer score = ${computerScore}`;
  } else if (
    (playerSelection === '✊🏻' && computerSelection === '✌🏼') ||
    (playerSelection === '✋🏻' && computerSelection === '✊🏻') ||
    (playerSelection === '✌🏼' && computerSelection === '✋🏻')
  ) {
    playerScore++;
    result.textContent = `you win! player score = ${playerScore}  computer score = ${computerScore}`;
    
  } else if(
    (playerSelection === '✌🏼' && computerSelection === '✊🏻') ||
    (playerSelection === '✋🏻' && computerSelection === '✌🏼') ||
    (playerSelection === '✌🏼' && computerSelection === '✊🏻')
  ) {
    computerScore++;
    result.textContent = `computer wins! player score = ${playerScore}  computer score = ${computerScore}`;
  }
}
