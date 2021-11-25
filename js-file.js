// generate a random number, and return one value from the array.
function computerPlay() {
    let values = ["rock", "paper", "scissor"];
    return values[Math.floor(Math.random() * values.length)];
}
//take the button
const btns = document.querySelectorAll('.button');
console.log(btns)
btns.forEach((button) => {
    button.addEventListener('click', buttonClicked);
})
//the event that the buttons are going to do. 
//and display the function playRound(line 26) with the id of the buttons, who returns paper, scissor and rock depending of the button clicked. I don't even know if my english is clear to understand  
function buttonClicked(event) {
    playRound(event.target.id, computerPlay());
    playedRounds();
}
//import I don't know what
let para = document.querySelector("#contentText");
let counter = document.querySelector("#counter");
let computer = document.querySelector(".computer");
let player = document.querySelector(".player");

//compare the selections of computerPlay(line 2); and the button clicked by the player
function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissor") {
        para.textContent = `You win ! ${playerSelection} beats ${computerSelection}`;
        scorePlayer();
    }else if (playerSelection == "scissor" && computerSelection == "paper") {
        para.textContent = `You win ! ${playerSelection} beats ${computerSelection}`;
        scorePlayer()
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        para.textContent = `You win ! ${playerSelection} beats ${computerSelection}`;
        scorePlayer()
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        para.textContent = `You lose ! ${computerSelection} beats ${playerSelection}`;
        scoreComputer()     
    }else if (playerSelection == "paper" && computerSelection == "scissor") {
        para.textContent = `You lose ! ${computerSelection} beats ${playerSelection}`;
        scoreComputer()
    }else if (playerSelection == "scissor" && computerSelection == "rock") {
        para.textContent = `You lose ! ${computerSelection} beats ${playerSelection}`;
        scoreComputer()
    }
    else if (playerSelection == computerSelection){
        para.textContent = `No winner, both ${playerSelection}`;
    }
}

//return the score from player
let playerScore = player.textContent = 0;
function scorePlayer() {
    player.textContent = ++playerScore;
}
//return the score from computer
let computerScore = computer.textContent = 0;
function scoreComputer(){
    computer.textContent = ++computerScore;
}
//return the winner, and a limit of 5 rounds.
let count = 0;
function playedRounds() {
    counter.textContent = `${count += 1} ° Round`;
    if(count == 5){
        if(playerScore > computerScore){
            alert('player winner!');
        }else if (computerScore > playerScore) {
            alert('Computer wins!');
        }else if (computerScore == playerScore) {
            alert('same bro');
        }
        counter.textContent = 'game is over!';
        count = 0;
        computerScore = 0;
        playerScore = player.textContent = 0;
        computerScore = computer.textContent = 0;
    }
    
}

