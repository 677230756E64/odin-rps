//a program that plays a round of rock-paper-scissors

function getComputerChoice(){
    let computerInput = Math.random();
    //console.log("random is " + Choice);
    
    if(computerInput <= 0.3){
        return "rock";
    } else if(computerInput > 0.6){
        return "paper";
    } else return "scissors";
}

function getPlayerChoice(){
    let playerInput = prompt("Choose either 'rock', 'paper' or 'scissors'").toLowerCase();
    return playerInput;
}

function inputCheck(pInput){
    if(pInput == "rock" || pInput == "paper" || pInput == "scissors"){
        return 1;
    } else return 0;
}

function playRpsRound(cChoice, pChoice){
    if(inputCheck(pChoice) == 0){
        console.log("We can't play if you don't choose either 'rock', 'paper' or 'scissors'");
        roundCount -= 1;
        return;
    }
    
    let outcome;

    switch(cChoice){
        case "rock":
            switch(pChoice){
                case "rock": 
                    outcome = 0;
                    break;
                case "paper":
                    outcome = 1;
                    break;
                case "scissors":
                    outcome = -1; 
            }
            break;
        case "paper":
            switch(pChoice){
                case "rock": 
                    outcome = -1;
                    break;
                case "paper":
                    outcome = 0;
                    break;
                case "scissors":
                    outcome = 1; 
            }
            break;
        case "scissors":
            switch(pChoice){
                case "rock": 
                    outcome = 1;
                    break;
                case "paper":
                    outcome = -1;
                    break;
                case "scissors":
                    outcome = 0; 
            }
            break;
    }

    console.log(`You chose '${pChoice}', the computer chose '${cChoice}'`);
    if(outcome == -1){
        computerWins += 1;
        return "The computer wins this round";
    } else if(outcome == 1){
        playerWins += 1;
        return "You win this round!";
    } else return "It's a draw this round";
}

function playRpsGame(){
    let computerSeleciton = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log(playRpsRound(computerSeleciton, playerSelection));
    
    if(roundCount < 4){
        roundCount += 1;
        playRpsGame();
    }

    roundCount -= 1;

    if(roundCount == 0){
        console.log(`The computer has ${computerWins} wins, you have ${playerWins} wins`);
        let result = computerWins - playerWins;
        if(result > 0){
            console.log("The computer won");
        } else if(result == 0){
            console.log("The game is a draw");
        } else console.log("You won!");
    }
}

let roundCount = 0;
let computerWins = 0, playerWins = 0;
playRpsGame();