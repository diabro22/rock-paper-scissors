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

    let playerChoice = prompt('Rock, Paper, or Scissors?');

    function playRound (playerChoice, getComputerChoice) {
        if ((playerChoice.toLowerCase() == 'rock' && getComputerChoice() == 'scissors') ||
            (playerChoice.toLowerCase() == 'paper' && getComputerChoice() == 'rock') ||
            (playerChoice.toLowerCase() == 'scissors' && getComputerChoice() == 'paper')) {
            return 'You win!';
        } 
        else if ((playerChoice.toLowerCase() == 'rock' && getComputerChoice() == 'rock') ||
                (playerChoice.toLowerCase() == 'paper' && getComputerChoice() == 'paper') ||
                (playerChoice.toLowerCase() == 'scissors' && getComputerChoice() == 'scissors')) {
                    return 'It\'s a tie!';
                }
        else if ((playerChoice.toLowerCase() == 'rock' && getComputerChoice() == 'paper') ||
                (playerChoice.toLowerCase() == 'paper' && getComputerChoice() == 'scissors') ||
                (playerChoice.toLowerCase() == 'scissors' && getComputerChoice() == 'rock')) {
                    return 'You lose!';
                }
        else {
            return 'Please enter a valid option';
        }
    }

    /*New function game simulates 5 rounds
    Count score after each round
    After 5 rounds, stop game and return final score from user perspective
    If user score higher than computer score after 5 rounds, declare user winner
    If user score lower than computer score, declare user loser
    If user score same as computer score, declare a tie*/

    function game() {
        for(let i = 0; i > 5; i++) {
            let n = /*user wins*/
            playRound(playerChoice, getComputerChoice);
            if (playRound() == 'You win!') {
                n++
            }
            }
        }

    console.log(playRound(playerChoice, getComputerChoice));