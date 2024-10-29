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

    while(choice != "rock" && choice != "paper" && choice != "scissors"
            && choice != "r" && choice != "p" && choice != "s") {
        choice = prompt("Please input rock, paper or scissors: ");
    }

    return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());