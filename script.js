let playerSelection;
let computerSelection;

const screen = document.querySelector('.screen');
const screenTextBig = document.querySelector('#screenTextBig');
const screenTextSmall = document.querySelector('#screenTextSmall');
const buttons = document.querySelectorAll('.button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

function gameStart(e) {
    screen.removeEventListener('click', gameStart); 
    if (playerScore.textContent < 3 && computerScore.textContent < 3) {
        buttons.forEach(makeButtonActive);
        screenTextBig.classList.add('hidden');
        screenTextSmall.textContent = 'Rock, Paper or Scissors!?';     
    }
    else {
        if (playerScore.textContent >= 3) {
            screenTextBig.textContent = 'Winner!';
            screenTextSmall.textContent = `You won against CPU. Play again?`;
        }
        else if (computerScore.textContent >= 3) {
            screenTextBig.textContent = 'Game Over';
            screenTextSmall.textContent = `You lost against CPU. Try again?`;
        }
        buttons.forEach(makeButtonInactive);
        screen.addEventListener(e.type, gameRestart); 
    }
}

function gameRestart(e) {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    gameStart();
}

function makeButtonActive(button) {
    button.classList.remove('selected');
    button.classList.remove('inactive');
    button.classList.add('active');
    button.removeEventListener('click', gameStart)
    button.addEventListener('click', getPlayerChoice)
}

function makeButtonInactive(button) {
    button.classList.remove('selected');
    button.classList.remove('active');
    button.classList.add('inactive');
    button.removeEventListener('click', gameStart)
    button.removeEventListener('click', getPlayerChoice)
}

function highlightButtonSelection(button) {
    button.classList.remove('active');
    if (button.getAttribute('data-selection') === playerSelection) {
        button.classList.add('selected');
    }
    else {
        button.classList.add('inactive');
    }
    button.addEventListener('click', gameStart)
    button.removeEventListener('click', getPlayerChoice);
}

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = ~~(choices.length * Math.random());
    return choices[choice];
}

function getPlayerChoice(e){
    const choices = ['Rock', 'Paper', 'Scissors'];
    playerSelection = this.getAttribute('data-selection');
    computerSelection = getComputerChoice();

    buttons.forEach(highlightButtonSelection);
    playRound(playerSelection, computerSelection);
    
    screen.addEventListener('click', gameStart);
}

function playRound(playerSelection, computerSelection){  
    screenTextBig.classList.remove('hidden');
    if (playerSelection === computerSelection){
        screenTextBig.textContent = 'Draw!';
        screenTextSmall.textContent = `You both picked ${playerSelection}.`;
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
        ){
            computerScore.textContent = Number(computerScore.textContent) + 1;
            computerScore.classList.add('add-score');
            screenTextBig.textContent = 'You lose!';
            screenTextSmall.textContent = `${computerSelection} beats ${playerSelection}.`;
        }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ){
            playerScore.textContent = Number(playerScore.textContent) + 1;
            playerScore.classList.add('add-score');
            screenTextBig.textContent = 'You win!';
            screenTextSmall.textContent = `${playerSelection} beats ${computerSelection}.`;
        }
}

function removeScoreEffect(e) {
    this.classList.remove('add-score');
}

screen.addEventListener('click', gameStart);
playerScore.addEventListener('transitionend', removeScoreEffect);
computerScore.addEventListener('transitionend', removeScoreEffect);

