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
    
    const textArray = [
        'rock',
        'paper',
        'scissors'
    ];

    let randomString = Math.floor(Math.random() * textArray.length);
    function getComputerChoice() { 
        return textArray[randomString];
    }

    const playerChoice = 'rock';

    function playRound (playerChoice, getComputerChoice) {
        if ((playerChoice.toLowerCase() == 'rock' && getComputerChoice() == 'scissors') ||
            (playerChoice.toLowerCase() == 'paper' && getComputerChoice() == 'rock') ||
            (playerChoice.toLowerCase() == 'scissors' && getComputerChoice() == 'paper')) {
            console.log('You win!');
        } 
        else if ((playerChoice.toLowerCase() == 'rock' && getComputerChoice() == 'rock') ||
                (playerChoice.toLowerCase() == 'paper' && getComputerChoice() == 'paper') ||
                (playerChoice.toLowerCase() == 'scissors' && getComputerChoice() == 'scissors')) {
                    console.log('It\'s a tie!');
                }
        else if ((playerChoice.toLowerCase() == 'rock' && getComputerChoice() == 'paper') ||
                (playerChoice.toLowerCase() == 'paper' && getComputerChoice() == 'scissors') ||
                (playerChoice.toLowerCase() == 'scissors' && getComputerChoice() == 'rock')) {
                    console.log('You lose!');
                }
    }

    playRound(playerChoice, getComputerChoice);