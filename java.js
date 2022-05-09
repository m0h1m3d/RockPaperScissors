function playRound(){

  let playerSelection = choice();
  function choice(){
    let input = prompt("pick either rock,paper or scissors");
    return input.toLowerCase();
  }
  console.log(playerSelection);

  let computerChoice = computerPlay();
  function computerPlay(){
    let picks =["rock","paper","scissors"];
    let pick = picks[Math.floor(Math.random(picks)*picks.length)];
    return pick;
  }
    console.log(computerChoice);

  function compare(playerSelection, computerChoice){
    if(playerSelection === computerChoice){
      console.log("It's a tie!")
    }
    else if((playerSelection == "rock" && computerChoice == "scissors")||
       (playerSelection == "paper" && computerChoice == "rock")||
       (playerSelection == "scissors" && computerChoice == "paper")){
      console.log("you win! computer lose.");
    }
    else{
      console.log("computer win! you lose.");
    }
  }
  compare(playerSelection, computerChoice);
}

function game(){
  for(let i =0; i<=4; i++){
    console.log(playRound());
  }
}

game();