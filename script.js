function getComputerChoice() {
    let choice = "error"; 
    let rand = Math.floor((Math.random() * 100)) % 3;
    
    // generate random number 0-2 to determine choice
    switch(rand) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }          
                
    console.log(rand);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors? ");
    choice = choice.toLowerCase();

    while(choice != "rock" && choice != "paper" && choice != "scissors"
            && choice != "r" && choice != "p" && choice != "s") {
        choice = prompt("Please input rock, paper or scissors: ");
    }

    return choice;
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());

// Main gameplay code below

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock smashed scissors!");
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper wrapped and trashed rock!");
        humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors shredded the paper!");
        humanScore += 1;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose! Rock smashed scissors!");
        computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose! Paper wrapped and trashed rock!");
        computerScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors shredded the paper!");
        computerScore += 1;
    } else {
        console.log("Gasp, it was a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);