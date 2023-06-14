function getPlayerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    while (true){
        let choice = prompt('Rock, Paper, Scissors!?').toLowerCase();
        choice = choice.charAt(0).toUpperCase() + choice.slice(1);

        if (choices.includes(choice)){
            return choice;
        }
        else {
            console.log('Invalid choice');
        }
    }
}

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(choices.length * Math.random());
    return choices[choice];
}

function playRound(playerSelection, computerSelection){  
    if (playerSelection === computerSelection){
        return `Draw! You both picked ${playerSelection}.`;
    }
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
        if (computerSelection === 'Scissors'){
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Scissors'){
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
        if (computerSelection === 'Rock'){
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Rock'){
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
        if (computerSelection === 'Paper'){
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
}

let playerScore;
let computerScore;

function game() {
    let playerSelection;
    let computerSelection;

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

console.log(game());
