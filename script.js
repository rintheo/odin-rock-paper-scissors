let playerScore;
let playerSelection;
let computerScore;
let computerSelection;

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getPlayerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    while (true){
        let choice = prompt('Rock, Paper, Scissors!?');

        if (choice != null){
            if (choices.includes(capitalize(choice))){
                return capitalize(choice);
            }
            else {
                console.log('Invalid choice');
            }
        }
        else {
            console.log('Canceled');
        }

    }
}

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = ~~(choices.length * Math.random());
    return choices[choice];
}

function playRound(playerSelection, computerSelection){  
    if (playerSelection === computerSelection){
        return `Draw! You both picked ${playerSelection}.`;
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
        ){
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ){
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`
        }
}

function game() {
    // Log initial scores
    playerScore = 0;
    computerScore = 0;    
    console.log(`Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

    // Best of five games
    while (playerScore < 3 && computerScore < 3){
        // Get player choices
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();    

        // Play a round
        console.clear();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

        if (playerScore >= 3){
            return 'You win the game!';
        }
        else if (computerScore >=3){
            return 'You lose the game!';
        }
    } 
}

// Play a game of five once
console.log(game());
