     /*user inputs rock, paper or scissors*/
    /*generate random choice for rock, paper or scissors*/
    /*if user input is rock and computer input is scissors, display message 'you win'*/
    /*if user input is rock and computer input is rock, display message 'it's a tie'*/
    /*if user input is rock and computer input is paper, display message 'you lose'*/
    /*if user input is paper and computer input is rock, display message 'you win'*/
    /*if user input is paper and computer input is paper, display message 'it's a tie'*/
    /*if user input is paper and computer input is scissors, display message 'you lose'*/
    /*if user input is scissors and computer input is paper, display message 'you win'*/
    /*if user input is scissors and computer input is scissors, dispay message 'it's a tie'*/
    /*if user input is scissors and computer input is rock, display message 'you win'*/
    
    var textArray = [
        'rock',
        'paper',
        'scissors'
    ];

    let randomString = Math.floor(Math.random() * textArray.length);
    let gameArray = textArray[randomString];

    function getComputerChoice() {
        return gameArray;
    }

    const playerChoice = 'rock';

    function getPlayerChoice() {
        return playerChoice;
    }

    function playRound (getPlayerChoice, getComputerChoice) {
        if ((getPlayerChoice == 'rock' && getComputerChoice == 'scissors') || 
            (getPlayerChoice == 'paper' && getComputerChoice == 'rock') ||
            (getPlayerChoice == 'scissors' && getComputerChoice == 'paper')) {
            console.log('You win!');
        } 
        else if ((getPlayerChoice == 'rock' && getComputerChoice == 'rock') ||
                (getPlayerChoice == 'paper' && getComputerChoice == 'paper') ||
                (getPlayerChoice == 'scissors' && getComputerChoice == 'scissors')) {
                    console.log('It\'s a tie!');
                }
        else if ((getPlayerChoice == 'rock' && getComputerChoice == 'paper') ||
                (getPlayerChoice == 'paper' && getComputerChoice == 'scissors') ||
                (getPlayerChoice == 'scissors' && getComputerChoice == 'rock')) {
                    console.log('You lose!');
                }
    }


    getComputerChoice();
    getPlayerChoice();
    playRound(getPlayerChoice, getComputerChoice);